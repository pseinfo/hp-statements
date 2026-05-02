import type { Context, HazardStatements, Statement } from './types';

import type { StatementCode } from '../data';
import { EUHCode, HCode, PCode } from '../data';

type BucketMap = {
  hazard: HCode;
  precautionary: PCode;
  eu: EUHCode;
};

export class Factory {
  private map: HazardStatements = {};
  private frozen: boolean = false;

  private assertMutable () : void | never {
    if ( this.frozen ) throw new Error( `Hazardous statements are frozen!` );
  }

  private bucket < K extends keyof BucketMap > ( key: K ) : NonNullable< HazardStatements[ K ] > {
    this.assertMutable();
    return this.map[ key ] ??= [];
  }

  private freeze () : void {
    const sort = < T extends StatementCode > ( arr: Statement< T >[] ) => [ ...arr ]
      .map( ( { context, ...rest } ) => context === undefined ? rest : { ...rest, context } )
      .sort( ( a, b ) => a.code.localeCompare( b.code ) );

    this.frozen = true;
    this.map = Object.freeze( {
      ...( this.map.hazard?.length && { hazard: sort( this.map.hazard ) } ),
      ...( this.map.precautionary?.length && { precautionary: sort( this.map.precautionary ) } ),
      ...( this.map.eu?.length && { eu: sort( this.map.eu ) } )
    } );
  }

  public H ( code: HCode, context?: Context ) : this {
    this.bucket( 'hazard' ).push( { code, context } );
    return this;
  }

  public P ( code: PCode, context?: Context ) : this {
    this.bucket( 'precautionary' ).push( { code, context } );
    return this;
  }

  public EUH ( code: EUHCode, context?: Context ) : this {
    this.bucket( 'eu' ).push( { code, context } );
    return this;
  }

  public toObj () : Readonly< HazardStatements > {
    this.freeze();
    return this.map;
  }

  public toJson ( space: number = 2 ) : string {
    return JSON.stringify( this.toObj(), null, space );
  }
}

export const HP = () => new Factory();

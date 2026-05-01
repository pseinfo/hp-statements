import type { EUHCode, HCode, PCode } from '../data';
import type { Context, HazardStatements } from './types';

type BucketMap = {
  hazard: HCode;
  precautionary: PCode;
  eu: EUHCode;
};

export class StatementBuilder {
  private map: HazardStatements = {};
  private frozen: boolean = false;

  private assertMutable () : void | never {
    if ( this.frozen ) throw new Error( `Hazardous statements are frozen ("build()" already called).` );
  }

  private bucket < K extends keyof BucketMap > ( key: K ) : NonNullable< HazardStatements[ K ] > {
    this.assertMutable();
    return this.map[ key ] ??= [];
  }

  private freeze () : void {
    const sort = < T extends { code: string } > ( arr: T[] ) =>
      [ ...arr ].sort( ( a, b ) => a.code.localeCompare( b.code ) );

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

  public build () : Readonly< HazardStatements > {
    this.freeze();
    return this.map;
  }
}

export const HP = () => new StatementBuilder();

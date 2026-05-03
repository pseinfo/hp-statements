import type { EUHCode, HCode, PCode, StatementCode } from '../data';
import type { Context, HazardStatements, Statement } from './types';

import { Assert } from './assert';

'use strict';


type BucketMap = {
  hazard: HCode;
  precautionary: PCode;
  eu: EUHCode;
};

/**
 * Factory class for building Hazard and Precautionary (HP) statement collections.
 * Provides a fluent interface to assemble GHS hazard, precautionary, and EU hazard statements.
 */
export class Factory {
  private map: HazardStatements = {};
  private frozen: boolean = false;

  /**
   * Asserts that the factory is not yet frozen and still accepts new statements.
   * @throws {Error} If the factory is frozen.
   * @private
   */
  private assertMutable () : void | never {
    if ( this.frozen ) throw new Error( `Hazardous statements are frozen!` );
  }

  /**
   * Retrieves or initializes a bucket for a specific statement type.
   * @param key The bucket key ('hazard', 'precautionary', or 'eu').
   * @returns The statement array for the given key.
   * @private
   */
  private bucket < K extends keyof BucketMap > ( key: K ) : NonNullable< HazardStatements[ K ] > {
    this.assertMutable();
    return this.map[ key ] ??= [];
  }

  /**
   * Freezes the current state, sorts the statements by code, and prevents further modifications.
   * @private
   */
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

  /**
   * Adds a hazard statement (H-phrase) to the collection.
   * @param code The H-code (e.g., 'H200').
   * @param context Optional template context for variables in the statement.
   * @returns The factory instance for chaining.
   */
  public H < T extends Context > ( code: HCode, context?: T ) : this {
    Assert.assertHCode( code );
    this.bucket( 'hazard' ).push( { code, context } );
    return this;
  }

  /**
   * Adds a precautionary statement (P-phrase) to the collection.
   * @param code The P-code (e.g., 'P101').
   * @param context Optional template context for variables in the statement.
   * @returns The factory instance for chaining.
   */
  public P < T extends Context > ( code: PCode, context?: T ) : this {
    Assert.assertPCode( code );
    this.bucket( 'precautionary' ).push( { code, context } );
    return this;
  }

  /**
   * Adds an EU hazard statement (EUH-phrase) to the collection.
   * @param code The EUH-code (e.g., 'EUH014').
   * @param context Optional template context for variables in the statement.
   * @returns The factory instance for chaining.
   */
  public EUH < T extends Context > ( code: EUHCode, context?: T ) : this {
    Assert.assertEUHCode( code );
    this.bucket( 'eu' ).push( { code, context } );
    return this;
  }

  /**
   * Finalizes the collection and returns the resulting object.
   * @returns A readonly representation of the assembled HP statements.
   */
  public toObj () : Readonly< HazardStatements > {
    if ( ! this.frozen ) this.freeze();
    return this.map;
  }

  /**
   * Finalizes the collection and returns it as a JSON string.
   * @param space The number of spaces for indentation (default is 2).
   * @returns The JSON string representation of the statements.
   */
  public toJson ( space: number = 2 ) : string {
    return JSON.stringify( this.toObj(), null, space );
  }
}

/**
 * Creates a new Factory instance for building HP statement collections.
 * @returns A fresh Factory instance.
 */
export const HP = () => new Factory();

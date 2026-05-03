import type { StatementCode } from '../data';
import type { StatementType } from './types';

import { EUHCode, HCode, PCode } from '../data';

'use strict';


const CODES = {
  H: new Set( HCode ), P: new Set( PCode ), EUH: new Set( EUHCode ),
  ALL: new Set( [ ...HCode, ...PCode, ...EUHCode ] as const )
} as const;

/**
 * Utility class for validating GHS statement codes.
 * Provides type guards and assertion methods for H, P, and EUH codes.
 */
export class Assert {
  /**
   * Extracts the prefix (e.g., 'H', 'P', 'EUH') from a given code.
   * @param code The code string to inspect.
   * @returns The prefix or undefined if not a string.
   * @private
   */
  private static readonly codePrefix = ( code: unknown ) : string | undefined => {
    if ( typeof code !== 'string' ) return undefined;
    return code.match( /^[A-Z]+/ )?.[ 0 ];
  };

  /**
   * Type guard to check if a value is a valid Hazard Statement (H) code.
   * @param value The value to check.
   * @returns True if the value is an H-code.
   */
  public static isHCode ( value: unknown ) : value is HCode {
    return CODES.H.has( value as HCode );
  }

  /**
   * Type guard to check if a value is a valid Precautionary Statement (P) code.
   * @param value The value to check.
   * @returns True if the value is a P-code.
   */
  public static isPCode ( value: unknown ) : value is PCode {
    return CODES.P.has( value as PCode );
  }

  /**
   * Type guard to check if a value is a valid EU Hazard Statement (EUH) code.
   * @param value The value to check.
   * @returns True if the value is an EUH-code.
   */
  public static isEUHCode ( value: unknown ) : value is EUHCode {
    return CODES.EUH.has( value as EUHCode );
  }

  /**
   * Type guard to check if a value is any valid GHS statement code.
   * @param value The value to check.
   * @returns True if the value is a valid H, P, or EUH code.
   */
  public static isStatementCode ( value: unknown ) : value is StatementCode {
    return CODES.ALL.has( value as StatementCode );
  }

  /**
   * Asserts that a value is a valid H-code.
   * @param value The value to assert.
   * @returns The value as HCode.
   * @throws {Error} If the value is not a valid H-code.
   */
  public static assertHCode ( value: unknown ) : HCode | never {
    if ( this.isHCode( value ) ) return value;
    throw new Error(
      `Invalid H-Code: got "${ value as string }", ` +
      `expected valid H statement code`
    );
  }

  /**
   * Asserts that a value is a valid P-code.
   * @param value The value to assert.
   * @returns The value as PCode.
   * @throws {Error} If the value is not a valid P-code.
   */
  public static assertPCode ( value: unknown ) : PCode | never {
    if ( this.isPCode( value ) ) return value;
    throw new Error(
      `Invalid P-Code: got "${ value as string }", ` +
      `expected valid P statement code`
    );
  }

  /**
   * Asserts that a value is a valid EUH-code.
   * @param value The value to assert.
   * @returns The value as EUHCode.
   * @throws {Error} If the value is not a valid EUH-code.
   */
  public static assertEUHCode ( value: unknown ) : EUHCode | never {
    if ( this.isEUHCode( value ) ) return value;
    throw new Error(
      `Invalid EUH-Code: got "${ value as string }", ` +
      `expected valid EUH statement code`
    );
  }

  /**
   * Asserts that a value is any valid GHS statement code.
   * @param value The value to assert.
   * @returns The value as StatementCode.
   * @throws {Error} If the value is not a valid statement code.
   */
  public static assertStatementCode ( value: unknown ) : StatementCode | never {
    if ( this.isStatementCode( value ) ) return value;
    throw new Error(
      `Invalid Statement Code: got "${ value as string }", ` +
      `expected valid H/P/EUH statement code`
    );
  }

  /**
   * Asserts that a value matches a specific statement type prefix.
   * @param value The value to check.
   * @param type The expected statement type ('H', 'P', 'EUH').
   * @returns The value cast to the appropriate code type.
   * @throws {Error} If the prefix or code is invalid.
   */
  public static assertCodeType < T extends StatementType > (
    value: unknown, type: T
  ) : T extends 'H' ? HCode : T extends 'P' ? PCode : EUHCode {
    const prefix = this.codePrefix( value );

    if ( prefix === type ) {
      if ( type === 'H' && this.isHCode( value ) ) return value as any;
      if ( type === 'P' && this.isPCode( value ) ) return value as any;
      if ( type === 'EUH' && this.isEUHCode( value ) ) return value as any;
      else throw new Error(
        `Invalid ${ prefix }-Code: got "${ value as string }", ` +
        `but prefix "${ prefix }" is not specified`
      );
    }

    throw new Error(
      `Invalid ${ type }-Code: got "${ value as string }", ` +
      `expected ${ type } statement code`
    );
  }
}

import type { StatementCode } from '../data';
import { EUHCode, HCode, PCode } from '../data';
import { StatementType } from './types';

const CODES = {
  H: new Set( HCode ), P: new Set( PCode ), EUH: new Set( EUHCode ),
  ALL: new Set( [ ...HCode, ...PCode, ...EUHCode ] as const )
} as const;

export class Assert {
  private static readonly codePrefix = ( code: unknown ) : string | undefined => {
    if ( typeof code !== 'string' ) return undefined;
    return code.match( /^[A-Z]+/ )?.[ 0 ];
  };

  public static isHCode ( value: unknown ) : value is HCode {
    return CODES.H.has( value as HCode );
  }

  public static isPCode ( value: unknown ) : value is PCode {
    return CODES.P.has( value as PCode );
  }

  public static isEUHCode ( value: unknown ) : value is EUHCode {
    return CODES.EUH.has( value as EUHCode );
  }

  public static isStatementCode ( value: unknown ) : value is StatementCode {
    return CODES.ALL.has( value as StatementCode );
  }

  public static assertHCode ( value: unknown ) : HCode | never {
    if ( this.isHCode( value ) ) return value;
    throw new Error( `Invalid H-Code: got "${ value as string }", expected valid H statement code` );
  }

  public static assertPCode ( value: unknown ) : PCode | never {
    if ( this.isPCode( value ) ) return value;
    throw new Error( `Invalid P-Code: got "${ value as string }", expected valid P statement code` );
  }

  public static assertEUHCode ( value: unknown ) : EUHCode | never {
    if ( this.isEUHCode( value ) ) return value;
    throw new Error( `Invalid EUH-Code: got "${ value as string }", expected valid EUH statement code` );
  }

  public static assertStatementCode ( value: unknown ) : StatementCode | never {
    if ( this.isStatementCode( value ) ) return value;
    throw new Error( `Invalid Statement Code: got "${ value as string }", expected valid H/P/EUH statement code` );
  }

  public static assertCodeType < T extends StatementType > (
    value: unknown, type: T
  ) : T extends 'H' ? HCode : T extends 'P' ? PCode : EUHCode {
    const prefix = this.codePrefix( value );

    if ( prefix === type ) {
      if ( type === 'H' && this.isHCode( value ) ) return value as any;
      if ( type === 'P' && this.isPCode( value ) ) return value as any;
      if ( type === 'EUH' && this.isEUHCode( value ) ) return value as any;
      else throw new Error( `Invalid ${ prefix }-Code: got "${ value as string }", but prefix "${ prefix }" is not specified` );
    }

    throw new Error( `Invalid ${ type }-Code: got "${ value as string }", expected ${ type } statement code` );
  }
}

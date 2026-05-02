import type { StatementCode } from '../data';
import { EUHCode, HCode, PCode } from '../data';

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
}

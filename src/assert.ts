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
}

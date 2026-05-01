import type { EUHCode, HCode, PCode } from '../data';
import type { HazardStatements } from './types';

type BucketMap = {
  hazard: HCode;
  precautionary: PCode;
  eu: EUHCode;
};

export class HazardManager {
  private map: HazardStatements = {};
  private frozen: boolean = false;

  private assertMutable () : void | never {
    if ( this.frozen ) throw new Error( `HazardManager is frozen (build() already called).` );
  }

  private bucket < K extends keyof BucketMap > ( key: K ) : NonNullable< HazardStatements[ K ] > {
    this.assertMutable();
    return this.map[ key ] ??= [];
  }
}

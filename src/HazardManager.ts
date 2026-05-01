import type { HazardStatements } from './types';

export class HazardManager {
  private map: HazardStatements = {
    hazard: [],
    precautionary: [],
    eu: []
  };

  public build () : HazardStatements {
    return this.map;
  }
}

export const HP = () => new HazardManager();

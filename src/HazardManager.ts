import type { HazardStatements } from './types';

export class HazardManager {
  private map: HazardStatements = {};
  private frozen: boolean = false;
}

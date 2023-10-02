import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;
  private _name: string;
  
  constructor(name: string) {
    this._special = 0;
    this._cost = 0;
    this._name = name;
  }

  // Getters
  public get name(): string { return this._name; }
  public get special(): number { return this._special; }
  public get cost(): number { return this._cost; }
  abstract get energyType(): EnergyType;
  
  // Métodos
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Archetype;
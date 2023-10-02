export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) { }

  // Getters
  public get name(): string { return this._name; }
  public get dexterity(): number { return this._dexterity; }
  abstract get maxLifePoints(): number; 

  // Métodos
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }
  
  getname() { return this.name; }
  getdexterity() { return this.dexterity; }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;    
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

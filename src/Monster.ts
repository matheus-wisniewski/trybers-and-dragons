import { SimpleFighter } from './Fight';

export default class Monster implements SimpleFighter {
  lifePoints = 85;
  strength = 63;

  attack(enemy: SimpleFighter): void {
    throw new Error('Method not implemented.');
  }

  receiveDamage(): number {
    throw new Error('Method not implemented.');
  }
}
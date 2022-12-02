import { Constants } from './constants';
import { Morador } from '../model/morador';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.MORADORES_KEY) != null) {
      return;
    }


    localStorage.setItem(Constants.MORADORES_KEY, JSON.stringify([]));
  }
}

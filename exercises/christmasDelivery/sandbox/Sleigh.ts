import Present from "./Present";
import Watcher from "./Watcher";

export default class Sleigh  {
    presents: Present[] = []
    
    receive(present: Present) {
      this.presents.push(present)
    }

}
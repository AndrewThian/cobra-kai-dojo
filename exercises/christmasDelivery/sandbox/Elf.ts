import Present from "./Present";
import ToyMachine from "./ToyMachine";
import Watcher from "./Watcher";
import Producer from "./Producer";
import Sleigh from "./Sleigh"

export default class Elf implements Watcher {
  present: Present
  sleigh: Sleigh

  constructor(sl: Sleigh){
    this.sleigh = sl
  }

  getPresent() {
    return this.present;
  }

  receive(present: Present) {
    this.present = present;
    this.sleigh.receive(present)
  }

}
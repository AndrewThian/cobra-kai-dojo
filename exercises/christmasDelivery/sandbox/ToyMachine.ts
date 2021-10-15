import Elf from "./Elf";
import Present from "./Present";
import Producer from "./Producer";
import Watcher from "./Watcher";

export default class ToyMachine implements Producer {
  watchers: Watcher[];

  constructor() {
    this.watchers = [];
  }

  addSubscriber(entity: Watcher) {
    this.watchers.push(entity);
  }

  createNewPresent() {
    const newPresent = new Present();
    this.watchers[0].receive(newPresent);
    thos.watchers.pop();
    return newPresent;
  }
}
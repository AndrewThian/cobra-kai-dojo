import Present from "./Present";
import Watcher from "./Watcher";
import Producer from "./Producer";

export default class MrsClaus implements Watcher, Producer {
  watchers: Watcher[] = [];

  addSubscriber(watcher: Watcher) {
    this.watchers.push(watcher);
  }
  receive(present: Present) {
    this.watchers[0].receive(present);
    this.watchers.pop();
  }
}

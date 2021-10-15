import Present from "./Present";
import Watcher from "./Watcher";

export default interface Producer {
  addSubscriber(watcher: Watcher);
}
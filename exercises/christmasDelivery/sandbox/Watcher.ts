import Present from "./Present";

export default interface Watcher {
  receive(present: Present)
}
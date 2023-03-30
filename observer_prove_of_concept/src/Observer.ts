import { ConcreteSubject, Subject } from "./Subject";

export interface Observer {
  update(subject: Subject): void;
}

export class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log("Observer: Received update with state ", subject.state);
    }
  }
}

export class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log("Observer: Received update with state ", subject.state);
    }
  }
}

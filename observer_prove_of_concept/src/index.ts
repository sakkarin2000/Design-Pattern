import { ConcreteObserverA, ConcreteObserverB } from "./Observer";
import { ConcreteSubject } from "./Subject";

function main() {
  const subject = new ConcreteSubject();

  const observer1 = new ConcreteObserverA();
  subject.addObserver(observer1);

  const observer2 = new ConcreteObserverB();
  subject.addObserver(observer2);

  subject.setState(4);
  subject.setState(6);

  subject.removeObserver(observer2);

  subject.setState(8);
}

main();

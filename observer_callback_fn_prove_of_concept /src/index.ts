import { Subject } from "./Subject";

function main() {
  const subject = new Subject();

  const observer1: ObserverCallback = (data) => {
    console.log(`Observer 1 received data: ${data}`);
  };
  subject.addObserver(observer1);

  const observer2: ObserverCallback = (data) => {
    console.log(`Observer 2 received data: ${data}`);
  };

  subject.addObserver(observer2);

  subject.setState(4);
  subject.setState(6);

  subject.removeObserver(observer2);

  subject.setState(8);
  subject.setState(10);
}

main();

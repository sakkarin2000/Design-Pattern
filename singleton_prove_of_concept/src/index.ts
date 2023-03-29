import { Subscriber } from "./subscriber";

function main() {
  const s1 = Subscriber.createInstance("A");
  const s2 = Subscriber.createInstance("B");
  const s3 = Subscriber.createInstance("C");
  const s4 = Subscriber.createInstance("D");

  console.log(s1.getName() + " Result: " + s1.getSubscribers());
  s1.unsubscribe();
  console.log(s2.getName() + " Result: " + s2.getSubscribers());
}

main();

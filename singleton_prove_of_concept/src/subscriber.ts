import repository from "./repository";

export class Subscriber {
  private static instance: Subscriber;
  private name: string;
  public constructor(name: string) {
    this.name = name;
    repository.addSubscriber(name);
  }

  public static createInstance(name: string): Subscriber {
    return (Subscriber.instance = new Subscriber(name));
  }

  public getSubscribers(): string[] {
    return repository.getSubscribers();
  }
  public getName(): string {
    return this.name;
  }

  public unsubscribe(): void {
    return repository.removeSubscriber(this.name);
  }
}

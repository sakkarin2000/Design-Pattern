import { Observer } from "./Observer";

export interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

export class ConcreteSubject implements Subject {
  public state: number = 0;

  private observers: Observer[] = [];

  /**
   * The subscription management methods.
   */
  public subscribe(observer: Observer): void {
    console.log("Subject: Subscribing observer...");
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    console.log("Subject: Unsubscribing observer...");
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public setState(state: number): void {
    console.log("Subject: Setting state to", state);
    this.state = state;
    this.notify();
  }
}

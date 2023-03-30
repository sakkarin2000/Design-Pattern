export class Subject {
  private observers: ObserverCallback[] = [];
  public state: number = 0;

  public addObserver(observer: ObserverCallback): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: ObserverCallback): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer(this.state);
    }
  }

  public setState(state: number): void {
    console.log("Subject: Setting state to", state);
    this.state = state;
    this.notify();
  }
}

class Repository {
  private static instance: Repository;
  private subscribersList: string[] = [];
  public constructor() {}
  public static getInstance(): Repository {
    if (!Repository.instance) {
      Repository.instance = new Repository();
    }
    return Repository.instance;
  }
  public getSubscribers(): string[] {
    return this.subscribersList;
  }
  public addSubscriber(subscriber: string): void {
    this.subscribersList.push(subscriber);
  }
  public removeSubscriber(subscriber: string): void {
    const index = this.subscribersList.indexOf(subscriber);
    if (index > -1) {
      this.subscribersList.splice(index, 1);
    }
  }
}

const repository = new Repository();
export default repository;

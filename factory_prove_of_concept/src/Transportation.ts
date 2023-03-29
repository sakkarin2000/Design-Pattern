import { GasProduct, OilProduct, Product } from "./Product";

export abstract class Transportation {
  public abstract deliver(): Product;

  public explainTransportation(): string {
    const product = this.deliver();
    return `This transportation deliver ${product.explainProduct()}`;
  }
}

export class Truck extends Transportation {
  public deliver(): Product {
    return new GasProduct();
  }
}

export class Ship extends Transportation {
  public deliver(): Product {
    return new OilProduct();
  }
}

export interface Product {
  explainProduct(): string;
}

export class OilProduct implements Product {
  public explainProduct(): string {
    return "Oil from SAUDI ARABIA";
  }
}

export class GasProduct implements Product {
  public explainProduct(): string {
    return "Gas from PTT";
  }
}

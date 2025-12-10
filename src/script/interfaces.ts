export interface TestCollectionInterface {
  id: number;
  expirationDate: Date;
  collection: TestInterface[];
}

export interface TestInterface {
  id: number;
  label: string;
}

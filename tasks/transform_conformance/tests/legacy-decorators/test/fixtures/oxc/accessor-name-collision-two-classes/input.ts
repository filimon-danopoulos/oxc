declare function property(): (target: any, propertyKey: string, desc: PropertyDescriptor) => void;

export class Foo {
  @property()
  accessor prop!: string;

  @property()
  accessor _prop!: string;
}

export class Bar {
  @property()
  accessor prop!: string;

  @property()
  accessor _prop!: string;
}

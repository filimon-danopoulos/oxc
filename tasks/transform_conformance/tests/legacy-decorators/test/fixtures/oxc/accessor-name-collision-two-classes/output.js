export class Foo {
  #_prop_accessor_storage;
  get prop() {
    return this.#_prop_accessor_storage;
  }
  set prop(value) {
    this.#_prop_accessor_storage = value;
  }
  #_prop_accessor_storage2;
  get _prop() {
    return this.#_prop_accessor_storage2;
  }
  set _prop(value) {
    this.#_prop_accessor_storage2 = value;
  }
}
babelHelpers.decorate([property()], Foo.prototype, "prop", null);
babelHelpers.decorate([property()], Foo.prototype, "_prop", null);
export class Bar {
  #_prop_accessor_storage;
  get prop() {
    return this.#_prop_accessor_storage;
  }
  set prop(value) {
    this.#_prop_accessor_storage = value;
  }
  #_prop_accessor_storage2;
  get _prop() {
    return this.#_prop_accessor_storage2;
  }
  set _prop(value) {
    this.#_prop_accessor_storage2 = value;
  }
}
babelHelpers.decorate([property()], Bar.prototype, "prop", null);
babelHelpers.decorate([property()], Bar.prototype, "_prop", null);

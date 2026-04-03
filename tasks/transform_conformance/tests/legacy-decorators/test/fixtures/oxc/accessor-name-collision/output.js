var _prop2, _prop3;
const prop = "foo";
const _prop = "bar";
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
  #_prop_computed_accessor_storage;
  get [_prop2 = prop]() {
    return this.#_prop_computed_accessor_storage;
  }
  set [prop](value) {
    this.#_prop_computed_accessor_storage = value;
  }
  #_prop_computed_accessor_storage2;
  get [_prop3 = _prop]() {
    return this.#_prop_computed_accessor_storage2;
  }
  set [_prop](value) {
    this.#_prop_computed_accessor_storage2 = value;
  }
}
babelHelpers.decorate([property()], Foo.prototype, "prop", null);
babelHelpers.decorate([property()], Foo.prototype, "_prop", null);
babelHelpers.decorate([property()], Foo.prototype, _prop2, null);
babelHelpers.decorate([property()], Foo.prototype, _prop3, null);

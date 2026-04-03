var _prop_accessor_storage = /* @__PURE__ */ new WeakMap();
var _prop_accessor_storage2 = /* @__PURE__ */ new WeakMap();
export class Foo {
  constructor() {
    babelHelpers.classPrivateFieldInitSpec(this, _prop_accessor_storage, void 0);
    babelHelpers.classPrivateFieldInitSpec(this, _prop_accessor_storage2, void 0);
  }
  get prop() {
    return babelHelpers.classPrivateFieldGet2(_prop_accessor_storage, this);
  }
  set prop(value) {
    babelHelpers.classPrivateFieldSet2(_prop_accessor_storage, this, value);
  }
  get _prop() {
    return babelHelpers.classPrivateFieldGet2(_prop_accessor_storage2, this);
  }
  set _prop(value) {
    babelHelpers.classPrivateFieldSet2(_prop_accessor_storage2, this, value);
  }
}
babelHelpers.decorate([property()], Foo.prototype, "prop", null);
babelHelpers.decorate([property()], Foo.prototype, "_prop", null);
var _prop_accessor_storage3 = /* @__PURE__ */ new WeakMap();
var _prop_accessor_storage4 = /* @__PURE__ */ new WeakMap();
export class Bar {
  constructor() {
    babelHelpers.classPrivateFieldInitSpec(this, _prop_accessor_storage3, void 0);
    babelHelpers.classPrivateFieldInitSpec(this, _prop_accessor_storage4, void 0);
  }
  get prop() {
    return babelHelpers.classPrivateFieldGet2(_prop_accessor_storage3, this);
  }
  set prop(value) {
    babelHelpers.classPrivateFieldSet2(_prop_accessor_storage3, this, value);
  }
  get _prop() {
    return babelHelpers.classPrivateFieldGet2(_prop_accessor_storage4, this);
  }
  set _prop(value) {
    babelHelpers.classPrivateFieldSet2(_prop_accessor_storage4, this, value);
  }
}
babelHelpers.decorate([property()], Bar.prototype, "prop", null);
babelHelpers.decorate([property()], Bar.prototype, "_prop", null);

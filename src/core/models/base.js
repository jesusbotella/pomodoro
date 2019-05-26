export default class BaseModel {
  get(property) {
    return this[property];
  }

  set(property, value) {
    this[property] = value;
  }
}

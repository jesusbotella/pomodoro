export default class BaseModel {
  get(property) {
    return this[property];
  }

  set(property, value) {
    if (typeof this[property] === 'undefined') {
      throw new Error(`'${property}' is not defined within this class.`);
    }

    this[property] = value;
  }
}

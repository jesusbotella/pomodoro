import BaseModel from './base';

export default class User extends BaseModel {
  constructor(email, id) {
    super();

    this.set('email', email);
    this.set('id', id);
  }
}

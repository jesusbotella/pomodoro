import BaseModel from './base';

export default class User extends BaseModel {
  constructor(email, id) {
    super();

    this.email = email;
    this.id = id;
  }
}

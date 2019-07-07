import uuidv4 from '@bundled-es-modules/uuid/v4';
import validate from './utils/validate';
import BaseModel from './base';

const requiredProperties = [
  { name: 'type', type: 'string' },
  { name: 'profile', type: 'string' },
];

export default class Pomodoro extends BaseModel {
  constructor(properties) {
    super();

    const validation = validate(requiredProperties, properties);

    if (!validation.valid) {
      throw new Error(`Error while creating pomodoro. '${validation.erroredProperty.name}' property is required.`);
    }

    this.id = uuidv4();
    this.type = properties.type;
    this.description = properties.description;
    this.profile = properties.profile;
    this.startedAt = new Date();
    this.finishedAt = null;
    this.categories = new Set(properties.categories);
  }

  finish() {
    this.finishedAt = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      description: this.description,
      profile: this.profile,
      startedAt: this.startedAt,
      finishedAt: this.finishedAt,
      categories: Array.from(this.categories),
    };
  }
}

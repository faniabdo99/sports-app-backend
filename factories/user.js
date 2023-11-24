import { faker } from '@faker-js/faker';
import db from '../models/index.js';

function createUser(attributes = {}) {
  return db.User.create({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.person.firstName(),
    phoneNumber: '01234456789',
  }).then((user) => user);
}
export default createUser;

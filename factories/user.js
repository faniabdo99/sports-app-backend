import { faker } from '@faker-js/faker';
import db from '../models/index.js';

function createUser(attributes = {}) {
  return db.User.create({
    firstName: attributes.firstName ?? faker.person.firstName(),
    lastName: attributes.lastName ?? faker.person.lastName(),
    email: attributes.email ?? faker.internet.email(),
    password: attributes.password ?? faker.person.firstName(),
    phoneNumber: attributes.phoneNumber ?? '01234456789',
  }).then((user) => user);
}
export default createUser;

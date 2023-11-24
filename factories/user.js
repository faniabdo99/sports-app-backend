import { faker } from '@faker-js/faker';
import db from '../models/index.js';

async function createUser(attributes = {}) {
    return await db.User.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.person.firstName(),
        phoneNumber: '01234456789'
    });
}
export default createUser;

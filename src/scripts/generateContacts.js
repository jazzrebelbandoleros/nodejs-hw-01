import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  const currentContacts = await readContacts();
  const generateContacts = [];
  for (let i = 0; i < number; i += 1) {
    generateContacts.push(createFakeContact());
  }
  const newContacts = [...currentContacts, ...generateContacts];
  await writeContacts(newContacts);
};

generateContacts(5);

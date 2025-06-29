import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const NewContact = createFakeContact();
  contacts.push(NewContact);
  await writeContacts(contacts);
};

addOneContact();

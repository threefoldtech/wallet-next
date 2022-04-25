import { getPkidClient } from '@/service/pkidService';
import { appKeyPair } from '@/service/cryptoService';
import { ContactType } from '@/types/contact.types';

export const getContactsFromPkid = async (): Promise<ContactType[]> => {
    const pkidClient = getPkidClient();

    const contacts = await pkidClient.getDoc(appKeyPair.value.publicKey, 'contacts');
    if (!contacts.success) {
        return [];
    }

    return contacts.data;
};

export const saveContactToPkid = async (contact: ContactType) => {
    const pkidClient = getPkidClient();
    const pkidContacts = await pkidClient.getDoc(appKeyPair.value.publicKey, 'contacts');

    let existingContacts: ContactType[] = [];

    if (pkidContacts?.success) {
        existingContacts = pkidContacts.data;
    }

    existingContacts.push(contact); // @TODO: make this a list unique contacts (combined key)

    await pkidClient.setDoc('contacts', existingContacts, true);
};

import { StorageTest } from '../storage';

const vault = {

};

const localStorage = {
    setItem(key, value) {
        vault[key] = value;
    },

    getItem(key) {
        return vault[key]
    }
};

const Storage = StorageTest(localStorage);

describe('Storage tests', () => {
    test('Given a storage name, Storage must return a new Storage object', () => {
        const s = Storage({ name: 'state' });
        expect(s.get).not.toBeUndefined();
        expect(s.save).not.toBeUndefined();
    });

    test('Given an object, save method must save it into localStorage by using storage.name that was set', () => {
        const s = Storage({ name: 'state' });

        const objectToSave = { test: 'this is a test ' };
        s.save(objectToSave);

        expect(s.get()).toEqual(objectToSave);

    });
});
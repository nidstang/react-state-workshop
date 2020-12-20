import fetch from '../fetch';

describe('Fetch tests', () => {
    test('Given any url, fetch must return a promise', () => {
        const res = fetch('http://whatever.com', 1);

        expect(res.then).not.toBeUndefined();
    });  

    test('Given any url, fetch must return a promise and when resolves it must contain a response', done => {
        fetch('http://whatever.com', 1)
            .then(res => {
                expect(res.json).not.toBeUndefined();
                done();
            });
    });

    test('Given any url, fetch promise res.json must return an object user with data', done => {
        fetch('http://whatever.com', 1)
            .then(res => res.json())
            .then(data => {
                expect(data).toEqual({
                    name: 'Open',
                    lastname: 'Webinars'
                });
                done();
            });
    });
});
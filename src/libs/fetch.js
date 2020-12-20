export default (url, delay = 2000) => {
    const mockedData = {
        name: 'Open',
        lastname: 'Webinars',
    };

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                json: () => mockedData,
            })
        }, delay);
    })
};
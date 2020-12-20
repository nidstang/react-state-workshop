const gen = function* () {
    let id = 0; 

    while(true) {
        yield id++;
    }
};

export default gen();
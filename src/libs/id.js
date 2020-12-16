export default function* () {
    let id = 0; 

    while(true) {
        yield id++;
    }
};
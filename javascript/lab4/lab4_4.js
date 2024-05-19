function isEmpty(obj) {
    const keys = Object.keys(obj);
    const symbols = Object.getOwnPropertySymbols(obj);
    return keys.length === 0 && symbols.length === 0;
}

const obj = {[Symbol()]: true};


console.log(isEmpty(obj));
console.log(isEmpty({})); 
function every(arr, cb){
    let result = true;
    arr.forEach((e) => {
        result = result && cb
    });
    return result;
}

module.exports.every = every;
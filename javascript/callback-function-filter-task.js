function myFilter(my_array, callback) {
    let arr = my_array.filter(function (e) {
        return callback(e) ? e : "";
    })
    console.log(arr);
}

function cb(e) {
    return e % 2 == 0 ? true : false;
}

myFilter([4, 5, 6, 7, 8], cb);
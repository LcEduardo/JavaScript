function factorial (x) {
    if (x < 0) {
        throw new console.error('x must not be negative');
    } 
    for (var f = 1; x > 1; f *= x, x--){}
    return f;
}

console.log(factorial(-1))
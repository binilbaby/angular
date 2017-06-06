function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var a = [];
a[0] = [];
a[0][0] = 1;
a[0][1] = 2;
a[0][2] = 3;
var result = sumMatrix(a);
console.log(result);

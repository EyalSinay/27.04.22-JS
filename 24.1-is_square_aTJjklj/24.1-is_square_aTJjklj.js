/*
You are given a function, Square, that takes four parameters, a, b, c, d,
denoting the length of the square edges.
Using prototype properties, add a method to Square named isSquare that
prints true if a Square object has equal edges and false if they are unequal.
*/

function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isEqualEdges = function(){
    const isEE = this.a === this.b && this.b === this.c && this.c === this.d ? true : false;
    console.log(isEE);
}

const square1 = new Square(5, 5, 6, 5);
const square2 = new Square(5, 5, 5, 5);

square1.isEqualEdges();
square2.isEqualEdges();
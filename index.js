function Calculator() {
  //this{}

  this.sum = function() {
    return this.a + this.b;
  }
  this.mul = function() {
    return this.a * this.b;
  }
  this.read = function() {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  }

  //return this;
}

const calculator = new Calculator();
calculator.read();


alert("Sum =" + calculator.sum());
alert("Mul =" + calculator.mul());
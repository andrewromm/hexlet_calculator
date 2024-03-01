class Calculator {
    constructor(a, b) {
      // basic validation
      if (!a || !b) throw new Error("Invalid input");

      this.a = a;
      this.b = b;
    }
    sum() {
      return this.a + this.b;
    }
    mul() {
      return this.a * this.b;
    }
  }
  
  export default Calculator;
  
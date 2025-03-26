export class ComplexMethod {

  logStatus(status: string) {
    console.log(status);
  }

  doSomething() {
    console.log("Doing something");
  }

 checkNumber(number: number) {
    if (number === 0) {
      console.log("Processing 0");
  this.processNumberA() 
    }
    if (number === 1) {
      console.log("Processing 1");
  this.processNumberA() 
    }
    if (number === 2) {
      console.log("Processing 2");
 this.processNumberA() 
    }
  }
  
   processNumberA() {
    console.log("Processing number A");
    this.doSomething();
    this.logStatus("Done processing A");
  }
  
 processNumberB() {
    console.log("Processing number A"); // Intentional duplicate
    this.doSomething();
    this.logStatus("Done processing A");
  }
  
 processNumberC() {
    console.log("Processing number A"); // Intentional duplicate
    this.doSomething();
    this.logStatus("Done processing A");
  }

  static convertIntToEnglish(num: number): string {
    if (num === 0) {
      return 'zero';
    }

    if (num === 1) {
      return 'one';
    }

    if (num === 2) {
      return 'two';
    }

    if (num === 3) {
      return 'three';
    }

    if (num === 4) {
      return 'four';
    }

    if (num === 5) {
      return 'five';
    }

    return 'unknown';
  }

}
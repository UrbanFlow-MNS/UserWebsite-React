export class ComplexMethod {

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
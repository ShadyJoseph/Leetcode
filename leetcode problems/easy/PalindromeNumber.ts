function isPalindrome(x: number): boolean {
    const letters = new String(x).split('');
    const length = letters.length;
    for (let count = 0; count <= length / 2; count++) {
      if (letters[count] !== letters[length - (count + 1)]) {
        return false;
      }
    }
    return true;
  }
// ButtonHandler.js (Mengelola interaksi tombol)
export default class ButtonHandler {
  constructor(calculator) {
    this.calculator = calculator; // Menyimpan referensi ke objek kalkulator
  }

  handleButton(value) {
    // Menangani klik pada tombol berdasarkan nilai yang diberikan
    if (!isNaN(value) || value === ".") {
      this.calculator.append(value); // Jika tombol adalah angka atau titik desimal, tambahkan ke display
    } else if (value === "AC") {
      this.calculator.clear(); // Jika tombol AC, bersihkan display
    } else if (value === "+/-") {
      this.calculator.toggleSign(); // Jika tombol +/- ditekan, toggle tanda
    } else if (value === "√") {
      this.calculator.calculateSquareRoot(); // Menghitung akar kuadrat
    } else if (value === "x²") {
      this.calculator.calculateSquare(); // Menghitung kuadrat
    } else if (value === "=") {
      this.calculator.calculate(); // Menghitung hasil dari ekspresi
    } else if (value === "π") {
      this.calculator.appendPi(); // Jika tombol π ditekan, tambahkan nilai π ke display
    } else if (value === "e") {
      this.calculator.appendE(); // Jika tombol e ditekan, tambahkan nilai
    } else if (value === "(") {
      this.calculator.appendOpenParenthesis(); // Jika tombol ( ditekan, tamb
    } else if (value === ")") {
      this.calculator.appendCloseParenthesis(); // Jika tombol ) ditekan, tamb
    } else {
      this.calculator.append(value); // Menambahkan nilai lainnya ke display
    }
  }
}

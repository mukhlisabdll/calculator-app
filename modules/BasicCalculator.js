// BasicCalculator.js (Kelas dasar kalkulator)
export default class BasicCalculator {
  constructor(display) {
    // Memastikan kelas dasar tidak bisa diinstansiasi langsung
    if (new.target === BasicCalculator) {
      throw new TypeError("Cannot instantiate BasicCalculator directly");
    }
    this.display = display;
  }

  append(value) {
    // Menambahkan nilai ke display; jika display saat ini "0", ganti dengan nilai baru
    this.display.value =
      this.display.value === "0" ? value : this.display.value + value;
  }

  clear() {
    // Menghapus display dan reset nilai
    this.display.clear();
  }

  toggleSign() {
    // Mengubah tanda positif/negatif dari nilai saat ini
    this.display.value = this.display.value.startsWith("-")
      ? this.display.value.slice(1) // Menghapus tanda negatif
      : "-" + this.display.value; // Menambahkan tanda negatif
  }

  calculate() {
    // Metode ini harus diimplementasikan dalam kelas turunan
    throw new Error("Method 'calculate()' must be implemented.");
  }
}

// Theme.js (Kelas untuk mengelola tema kalkulator)
export default class Theme {
  constructor() {
    // Mengambil elemen tombol toggle dari HTML
    this.toggleButton = document.getElementById("toggleButton");
  }

  initializeTheme() {
    // Mengambil tema yang disimpan di localStorage
    const savedTheme = localStorage.getItem("theme");
    // Memeriksa apakah pengguna memiliki preferensi tema gelap
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    // Menentukan tema yang akan digunakan
    const theme = savedTheme || (prefersDarkScheme ? "dark" : "light");

    // Menambahkan kelas tema ke elemen body
    document.body.classList.add(theme);
    // Memperbarui tema kalkulator berdasarkan tema yang ditentukan
    this.updateCalculatorTheme(theme);
  }

  toggleMode() {
    // Memeriksa tema saat ini
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    // Menentukan tema baru (beralih antara gelap dan terang)
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Mengganti kelas tema di elemen body
    document.body.classList.replace(currentTheme, newTheme);
    // Menyimpan tema baru di localStorage
    localStorage.setItem("theme", newTheme);

    // Memperbarui tema kalkulator sesuai dengan tema baru
    this.updateCalculatorTheme(newTheme);
  }

  updateCalculatorTheme(theme) {
    // Mengubah teks pada tombol toggle berdasarkan tema
    this.toggleButton.textContent = theme === "dark" ? "🌙" : "☀";

    // Mengambil elemen kalkulator, display, dan tombol
    const calculator = document.getElementById("calculator");
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button.number");

    // Mengganti kelas kalkulator, display, dan tombol dengan tema yang sesuai
    calculator.className = `calculator ${theme}`;
    display.className = `display ${theme}`;
    buttons.forEach((button) => {
      button.className = `button number ${theme}`;
    });
  }
}

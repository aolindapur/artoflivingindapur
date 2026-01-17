const switcher = document.getElementById("languageSwitcher");

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.innerHTML = data[key] || "";
      });
      document.documentElement.lang = lang;
      localStorage.setItem("siteLang", lang);
    });
}

// Load saved language
const savedLang = localStorage.getItem("siteLang") || "en";
switcher.value = savedLang;
loadLanguage(savedLang);

// On change
switcher.addEventListener("change", () => {
  loadLanguage(switcher.value);
});

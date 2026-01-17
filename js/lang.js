const switcher = document.getElementById("languageSwitcher");

function loadLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-lang]").forEach(el => {
        el.innerHTML = data[el.dataset.lang];
      });
      localStorage.setItem("lang", lang);
    });
}

const savedLang = localStorage.getItem("lang") || "en";
if (switcher) {
  switcher.value = savedLang;
  loadLang(savedLang);
  switcher.addEventListener("change", () => loadLang(switcher.value));
}

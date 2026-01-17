document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");

  function loadLang(lang) {
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        document.querySelectorAll("[data-lang]").forEach(el => {
          const key = el.getAttribute("data-lang");
          el.innerHTML = data[key] || "";
        });
        localStorage.setItem("lang", lang);
      })
      .catch(err => console.error("Language load error:", err));
  }

  const savedLang = localStorage.getItem("lang") || "en";
  if (switcher) {
    switcher.value = savedLang;
    loadLang(savedLang);
    switcher.addEventListener("change", () => loadLang(switcher.value));
  }
});

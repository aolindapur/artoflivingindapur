document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");

  function loadLang(lang) {
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {

        // Update all visible text
        document.querySelectorAll("[data-lang]").forEach(el => {
          const key = el.getAttribute("data-lang");
          if (data[key]) el.innerHTML = data[key];
        });

        // 🔥 FIX: Update page title
        if (data.hero_title) {
          document.title = data.hero_title;
        }

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

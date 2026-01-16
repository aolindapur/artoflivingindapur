const data = {
  en: {
    title: "Art of Living Meditation Center, Indapur",
    subtitle: "A Space for Inner Peace, Happiness & Transformation",
    aboutTitle: "About the Center",
    aboutText: "The Art of Living Meditation Center, Indapur is a peaceful and positive space dedicated to meditation, yoga, breathing techniques, and holistic personality development.",
    ambienceTitle: "Center Ambience",
    ambienceText: "The center offers a clean, calm, and spiritually uplifting ambience.",
    programsTitle: "Regular Programs",
    galleryTitle: "Gallery",
    locationTitle: "Location",
    connectTitle: "Connect With Us",
    contactTitle: "Contact Us",
    contactText: "📍 Indapur, Maharashtra\n📞 Phone: +91 99218 67247\n📧 Email: artoflivingindapur@gmail.com"
  },
  mr: {
    title: "आर्ट ऑफ लिव्हिंग ध्यान केंद्र, इंदापूर",
    subtitle: "आंतरिक शांती, आनंद आणि परिवर्तनाचे केंद्र",
    aboutTitle: "केंद्राविषयी माहिती",
    aboutText: "आर्ट ऑफ लिव्हिंग ध्यान केंद्र, इंदापूर हे ध्यान, योग, श्वसन तंत्र आणि व्यक्तिमत्त्व विकासासाठी समर्पित शांत व सकारात्मक ऊर्जा असलेले केंद्र आहे.",
    ambienceTitle: "केंद्राचे वातावरण",
    ambienceText: "हे केंद्र शांत, स्वच्छ आणि ध्यानासाठी अनुकूल असे आध्यात्मिक वातावरण देते.",
    programsTitle: "नियमित कार्यक्रम",
    galleryTitle: "छायाचित्रे",
    locationTitle: "ठिकाण",
    connectTitle: "आमच्याशी संपर्क साधा",
    contactTitle: "संपर्क",
    contactText: "📍 इंदापूर, महाराष्ट्र\n📞 फोन: +91 99218 67247\n📧 ईमेल: artoflivingindapur@gmail.com"
  }
};

function changeLang(lang) {
  document.getElementById("title").innerText = data[lang].title;
  document.getElementById("subtitle").innerText = data[lang].subtitle;
  document.getElementById("aboutTitle").innerText = data[lang].aboutTitle;
  document.getElementById("aboutText").innerText = data[lang].aboutText;
  document.getElementById("ambienceTitle").innerText = data[lang].ambienceTitle;
  document.getElementById("ambienceText").innerText = data[lang].ambienceText;
  document.getElementById("programsTitle").innerText = data[lang].programsTitle;
  document.getElementById("galleryTitle").innerText = data[lang].galleryTitle;
  document.getElementById("locationTitle").innerText = data[lang].locationTitle;
  document.getElementById("connectTitle").innerText = data[lang].connectTitle;
  document.getElementById("contactTitle").innerText = data[lang].contactTitle;
  document.getElementById("contactText").innerText = data[lang].contactText;
}

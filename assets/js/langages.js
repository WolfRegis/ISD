async function changeLanguage(lang) {
  const response = await fetch("./lang/" + lang + ".json");
  const translations = await response.json();

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = translations[key];
  });
  
  // Optionnel : Sauvegarder le choix de l'utilisateur
  localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  changeLanguage(savedLang);
});

document.getElementById('language-select').addEventListener('change', (e) => {
  changeLanguage(e.target.value);
});

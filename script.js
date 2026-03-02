function switchLang(lang) {
    document.querySelectorAll("[data-th]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });
}
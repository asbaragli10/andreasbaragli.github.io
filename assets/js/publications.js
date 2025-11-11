function toggleSection(id, type, linkElem) {
  const elem = document.getElementById(type + '-' + id);
  if (!elem) return;

  // Slide animation
  if (elem.style.maxHeight) {
    elem.style.maxHeight = null; // collapse
    elem.classList.add("hidden");
  } else {
    elem.classList.remove("hidden");
    elem.style.maxHeight = elem.scrollHeight + "px"; // expand
  }

  // Rotate the icon
  const icon = linkElem.querySelector(".toggle-icon");
  if (icon) {
    icon.textContent = elem.style.maxHeight ? "▲" : "▼";
  }
}

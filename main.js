(() => {
  document.documentElement.dataset.websiteExport = "ai-neirochat";

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
document.addEventListener("DOMContentLoaded", () => {
    // Находим выпадающий список (тип билета) и все инпуты с датами
    const selectEl = document.querySelector('select');
    const dateInputs = document.querySelectorAll('input[type="date"]');

    // Находим контейнер второго инпута (Даты возврата)
    // Обычно это родительский блок input, который можно скрыть
    if (selectEl && dateInputs.length >= 2) {
        const returnDateInput = dateInputs[1]; // Второй инпут - это возврат
        const returnContainer = returnDateInput.closest('div'); // Его родительский контейнер

        if (returnContainer) {
            selectEl.addEventListener('change', function() {
                // Если выбрано "В одну сторону" (или первая опция в списке)
                if (this.selectedIndex === 1 || this.value.includes('одну')) {
                    returnContainer.style.display = 'none';
                } else {
                    returnContainer.style.display = 'block';
                }
            });
        }
    }
});

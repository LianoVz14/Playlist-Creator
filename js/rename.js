function makeEditable(titleElement) {
    const originalName = titleElement.innerText;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalName;
    input.classList.add('rename-input');

    // Replace title with input field
    titleElement.replaceWith(input);
    input.focus();

    // Save name when "Enter" or "Escape" is pressed
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            titleElement.innerText = input.value || originalName;  // Fallback to original name if empty
            input.replaceWith(titleElement);
        } else if (e.key === 'Escape') {
            input.replaceWith(titleElement); // Revert to original name on escape
        }
    });

    // Save name on blur (clicking outside)
    input.addEventListener('blur', () => {
        titleElement.innerText = input.value || originalName;  // Fallback to original name if empty
        input.replaceWith(titleElement);
    });
}

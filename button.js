function copyText(textareaId, confirmationId) {
  // Get the textarea element by its ID
  const textarea = document.getElementById(textareaId);

  // Use the Clipboard API to copy the text
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textarea.value)
      .then(() => {
        // Update the confirmation message for the specific textarea
        const confirmation = document.getElementById(confirmationId);
        confirmation.innerHTML = '<button class="copy">Copied!</button>';

        // Revert the button text after 2 seconds
        setTimeout(() => {
          confirmation.innerHTML = `<button class="copy" onclick="copyText('${textareaId}', '${confirmationId}')">Copy</button>`;
        }, 2000); // 2 seconds delay before reverting
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text. Please try again.");
      });
  } else {
    alert("Clipboard API not supported in your browser");
  }
}

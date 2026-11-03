const ack = document.getElementById('ack');
const submitBtn = document.getElementById('submit');
const helper = document.getElementById('helper');

// Checkbox tick/untick hone pe Submit button enable/disable
ack.addEventListener('change', () => {
  submitBtn.disabled = !ack.checked;
  helper.textContent = ack.checked
    ? 'You can submit now.'
    : 'Tick the checkbox to enable Submit.';
});

// Submit click
submitBtn.addEventListener('click', () => {
  // TODO: yahan apna submit logic daalo (API call / modal close)
  alert('Submitted!');
});

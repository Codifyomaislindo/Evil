function inviteEvil() {
  const message = document.createElement('div');
  message.textContent = 'You will be redirected to the invite site in 5 seconds! Enjoy Evil!';
  message.style.color = '#fff';
  message.style.backgroundColor = '#000';
  message.style.padding = '1rem';
  message.style.textAlign = 'center';
  message.style.margin = '1rem';
  message.style.position = 'fixed';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  message.style.zIndex = '9999';
  document.body.appendChild(message);

  setTimeout(() => {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1203349852394758184&scope=bot%20applications.commands&permissions=2146958847';
  }, 5000);
}

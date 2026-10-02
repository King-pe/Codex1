const sections = [...document.querySelectorAll('.page')];
const navButtons = [...document.querySelectorAll('nav button')];
const currentSection = document.getElementById('current-section');
const topbar = document.querySelector('.topbar');

function showSection(id) {
  sections.forEach((section) => section.classList.toggle('active-page', section.id === id));
  navButtons.forEach((button) => button.classList.toggle('active', button.dataset.section === id));
  const active = navButtons.find((button) => button.dataset.section === id);
  if (active) currentSection.textContent = active.textContent;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  topbar.classList.remove('menu-open');
}

navButtons.forEach((button) => button.addEventListener('click', () => showSection(button.dataset.section)));
document.querySelectorAll('[data-jump]').forEach((button) => button.addEventListener('click', () => showSection(button.dataset.jump)));
document.getElementById('menu-button').addEventListener('click', () => topbar.classList.toggle('menu-open'));

document.getElementById('device-check').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const label = button.querySelector('span');
  label.textContent = 'Checking...';
  button.disabled = true;
  document.getElementById('device-pill').textContent = '● Scanning';
  setTimeout(() => { label.textContent = 'Check complete'; button.disabled = false; document.getElementById('device-pill').textContent = '● Scanned'; }, 900);
});

document.getElementById('network-test').addEventListener('click', (event) => {
  const button = event.currentTarget;
  button.textContent = '⟳ Testing'; button.disabled = true;
  ['connection-result', 'dns-result', 'latency-result'].forEach((id) => document.getElementById(id).textContent = 'Checking...');
  setTimeout(() => {
    document.getElementById('connection-result').textContent = 'Stable connection detected';
    document.getElementById('dns-result').textContent = 'Resolver responded';
    document.getElementById('latency-result').textContent = '42 ms · Good';
    document.querySelectorAll('.checks i').forEach((dot) => { dot.style.background = '#168550'; });
    button.textContent = '↻ Test again'; button.disabled = false;
  }, 1100);
});

document.getElementById('copy-checklist').addEventListener('click', async (event) => {
  await navigator.clipboard?.writeText('Toggle airplane mode → Forget Wi-Fi → Reconnect → Restart router → Check APN');
  event.currentTarget.textContent = '✓ Copied';
  setTimeout(() => { event.currentTarget.textContent = '□  Copy checklist'; }, 1500);
});

document.getElementById('scale-slider').addEventListener('input', (event) => {
  const value = event.target.value;
  document.getElementById('scale-value').textContent = `${value}%`;
  document.getElementById('phone-screen').style.fontSize = `${value}%`;
});

document.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', async () => {
  await navigator.clipboard?.writeText(button.dataset.copy);
  const original = button.querySelector('span').textContent;
  button.querySelector('span').textContent = '✓';
  setTimeout(() => { button.querySelector('span').textContent = original; }, 1200);
}));

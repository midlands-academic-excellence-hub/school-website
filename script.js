const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => { const open = header.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => { header.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) enquiryForm.addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.querySelector('.form-message').textContent = 'Thank you — your enquiry has been received. We will be in touch soon.'; event.currentTarget.reset(); });

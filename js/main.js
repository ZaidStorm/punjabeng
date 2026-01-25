// ================= MENU TOGGLE =================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ================= WHATSAPP SERVICE MESSAGE =================
function sendWhatsApp(service) {
  const phone = '923006904153';
  const message = `Hello! I am interested in your service: ${service}`;
  const encodedMessage = encodeURIComponent(message);

  // Update WhatsApp link dynamically
  const waBtn = document.getElementById('contactWhatsApp');
  waBtn.href = `https://wa.me/${phone}?text=${encodedMessage}`;

  // Show message in contact section
  const preMessageDiv = document.getElementById('preMessage');
  preMessageDiv.textContent = `Your message: "${message}"`;
  preMessageDiv.style.display = 'block';

  // Open WhatsApp in a new tab
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}

// ================= PORTFOLIO MODAL =================
function openModal(img) {
  const modalImage = document.getElementById('modalImage');
  modalImage.src = img.src;
  const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
  modal.show();
}

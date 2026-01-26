// ================= WHATSAPP SERVICE MESSAGE =================
function sendWhatsApp(service) {
  const phone = '923006904153';
  const message = `Hello! I am interested in your service: ${service}`;
  const encodedMessage = encodeURIComponent(message);

  // Open WhatsApp in new tab
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');

  // Optional: show pre-filled message on page
  const preMessageDiv = document.getElementById('preMessage');
  if(preMessageDiv) {
    preMessageDiv.textContent = `Your message: "${message}"`;
    preMessageDiv.style.display = 'block';
  }
}

// ================= PORTFOLIO MODAL =================
function openModal(img) {
  const modalImage = document.getElementById('modalImage');
  modalImage.src = img.src;
  const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
  modal.show();
}

// ================= MAP ZOOM FUNCTIONALITY =================
const mapImg = document.getElementById("map-image");
if(mapImg){
  let scale = 1; // initial zoom
  const zoomStep = 0.1; // zoom increment

  mapImg.addEventListener("wheel", function(e){
    e.preventDefault();
    if(e.deltaY < 0){
      scale += zoomStep; // zoom in
    } else {
      scale -= zoomStep; // zoom out
      if(scale < 1) scale = 1; // minimum zoom = 1
    }
    mapImg.style.transform = `scale(${scale})`;
  });

  // Optional: click-and-drag panning
  let isDragging = false;
  let startX, startY;
  let originX = 0, originY = 0;

  mapImg.addEventListener("mousedown", function(e){
    isDragging = true;
    startX = e.clientX - originX;
    startY = e.clientY - originY;
    mapImg.style.cursor = "grabbing";
  });

  mapImg.addEventListener("mouseup", function(){
    isDragging = false;
    mapImg.style.cursor = "grab";
  });

  mapImg.addEventListener("mouseleave", function(){
    isDragging = false;
    mapImg.style.cursor = "grab";
  });

  mapImg.addEventListener("mousemove", function(e){
    if(!isDragging) return;
    originX = e.clientX - startX;
    originY = e.clientY - startY;
    mapImg.style.transform = `scale(${scale}) translate(${originX/scale}px, ${originY/scale}px)`;
  });
}

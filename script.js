document.addEventListener('DOMContentLoaded', () => {
    // 1. Filtrado del Catálogo
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active del botón actual y asignarla al nuevo
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. Modal de Detalles de Producto
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');
    const detailButtons = document.querySelectorAll('.btn-detail');

    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');
    const modalWhatsapp = document.getElementById('modalWhatsapp');

    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            
            const name = card.getAttribute('data-name');
            const price = card.getAttribute('data-price');
            const desc = card.getAttribute('data-desc');
            const img = card.getAttribute('data-img');

            // Rellenar datos en el modal
            modalImg.src = img;
            modalTitle.textContent = name;
            modalDesc.textContent = desc;
            modalPrice.textContent = price;

            // Configurar enlace de WhatsApp personalizado para este producto
            const mensaje = encodeURIComponent(`Hola, me interesa encargar el producto "${name}" (${price}). ¿Disponen de stock?`);
            modalWhatsapp.href = `https://wa.me/34623554090?text=${mensaje}`;

            // Mostrar modal
            modal.style.display = 'flex';
        });
    });

    // Cerrar modal al hacer clic en la "X"
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

function filterProjects(tag) {
    document.querySelectorAll('.project-card').forEach(card => {
        const tags = card.dataset.tags.split(' ');
        card.style.display = tags.includes(tag) ? 'block' : 'none';
    });
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    this.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

function openModal({title, content, tags, image}) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');

    let imageHTML = '';
    if(image) {
        imageHTML = `<img src="${image}" alt="${title}" class="modal-image">`;
    }

    modalContent.innerHTML = `
        ${imageHTML}
        <p>${content}</p>
        <div class="tech-tags">
            ${tags.split(',').map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
    `;

    document.getElementById('modal-title').textContent = title;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

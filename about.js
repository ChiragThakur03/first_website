// Image preview functionality
function openImagePreview(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Close modal when clicking the close button
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('imageModal').style.display = "none";
});

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});

// Load Head of Block information
function loadHeadOfBlockInfo() {
    const headData = JSON.parse(localStorage.getItem('headData') || '{}');
    const headImage = localStorage.getItem('headImage');
    const headSection = document.getElementById('headOfBlockInfo');
    
    headSection.innerHTML = `
        <img src="${headImage || 'head-placeholder.jpg'}" alt="Head of Block" class="profile-image">
        <div class="profile-info">
            <h3>${headData.name || 'Head of Block'}</h3>
            <p>${headData.info || 'Information about the Head of Block will be updated soon.'}</p>
        </div>
    `;
}

// Load BDOs information
function loadBDOsInfo() {
    const bdos = JSON.parse(localStorage.getItem('bdoData') || '[]');
    const bdoSection = document.querySelector('.bdos .profile-card');
    
    if (bdos.length === 0) {
        bdoSection.innerHTML = `
            <img src="bdo-placeholder.jpg" alt="BDO" class="profile-image">
            <div class="profile-info">
                <h3>BDO Information</h3>
                <p>Information about BDOs will be updated soon.</p>
            </div>
        `;
        return;
    }
    
    bdoSection.innerHTML = bdos.map(bdo => `
        <div class="bdo-card">
            <img src="${bdo.image || 'bdo-placeholder.jpg'}" alt="${bdo.name}" class="profile-image">
            <div class="profile-info">
                <h3>${bdo.name}</h3>
                <p class="designation">${bdo.designation}</p>
                <p>${bdo.info}</p>
            </div>
        </div>
    `).join('');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadHeadOfBlockInfo();
    loadBDOsInfo();
});

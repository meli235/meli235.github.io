document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('mainButton');
    const messageDiv = document.getElementById('message');
    
    // Efek saat tombol diklik
    mainButton.addEventListener('click', function() {
        // Animasi tombol
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Tampilkan pesan
        messageDiv.textContent = 'Terima kasih! Anda akan diarahkan ke halaman berikutnya...';
        messageDiv.classList.remove('hidden');
        
        // Ganti teks tombol setelah diklik
        this.textContent = 'Memproses...';
        this.disabled = true;
        
        // Simulasi redirect setelah 2 detik
        setTimeout(() => {
            // window.location.href = 'halaman-berikutnya.html';
            alert('Redirect ke halaman berikutnya akan terjadi di sini');
            
            // Reset tombol (untuk demo)
            setTimeout(() => {
                this.textContent = 'Mulai Jelajahi';
                this.disabled = false;
                messageDiv.classList.add('hidden');
            }, 1000);
        }, 2000);
    });
    
    // Efek hover untuk dekorasi
    const decorations = document.querySelectorAll('.decoration');
    decorations.forEach(decoration => {
        decoration.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        decoration.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
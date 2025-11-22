  const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('overlay');
        const menuLinks = document.querySelectorAll('.links a');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
        document.getElementById('download-cv').addEventListener('click', function(e) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'docs/resume.pdf';
            link.download = 'Ritesh_Chauhan_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
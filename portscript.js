<script>
    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.querySelector('.togglebtn');
        const navLinks = document.querySelector('.navlinks');

        toggleButton.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    });
</script>

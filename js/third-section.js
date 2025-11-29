document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.trade-show-slider7 .slide7');
    const dots = document.querySelectorAll('.slider-dots7 .dot7');
    let currentSlide = 0;
    const slideInterval = 4000;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active7'));
        dots.forEach(dot => dot.classList.remove('active7'));

        slides[index].classList.add('active7');
        dots[index].classList.add('active7');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if(slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
    
    const scrollContainers = document.querySelectorAll('.scroll-container7');
    scrollContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('active7');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        container.addEventListener('mouseleave', () => { isDown = false; });
        container.addEventListener('mouseup', () => { isDown = false; });
        container.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
});
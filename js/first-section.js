   // ===== كود الجافاسكربت للسحب والتمرير 😎 =====
        const storeSliders = document.querySelectorAll('.store-drag-scroll-1');
        let storeIsDown = false;
        let storeStartX;
        let storeScrollLeft;

        storeSliders.forEach(slider => {
            slider.addEventListener('mousedown', (e) => {
                storeIsDown = true;
                slider.classList.add('active');
                storeStartX = e.pageX - slider.offsetLeft;
                storeScrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                storeIsDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mouseup', () => {
                storeIsDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mousemove', (e) => {
                if (!storeIsDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - storeStartX) * 2;
                slider.scrollLeft = storeScrollLeft - walk;
            });
        });
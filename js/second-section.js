        document.addEventListener("DOMContentLoaded", function () {
            // تحسين التمرير بالسحب للفأرة/اللمس للكاروسيلات
            document.querySelectorAll(".services-scroll-9, .featured-scroll-9, .white-bg-scroll-9").forEach(scroller => {
                let isDown = false, startX = 0, scrollLeft = 0;

                const start = (x) => { 
                    isDown = true; 
                    startX = x - scroller.offsetLeft; 
                    scrollLeft = scroller.scrollLeft; 
                };
                
                const move = (x) => {
                    if (!isDown) return;
                    const walk = (x - scroller.offsetLeft - startX);
                    scroller.scrollLeft = scrollLeft - walk;
                };
                
                const end = () => { isDown = false; };

                scroller.addEventListener("mousedown", e => start(e.pageX));
                scroller.addEventListener("mousemove", e => move(e.pageX));
                scroller.addEventListener("mouseleave", end);
                scroller.addEventListener("mouseup", end);

                scroller.addEventListener("touchstart", e => start(e.touches[0].pageX), { passive: true });
                scroller.addEventListener("touchmove", e => move(e.touches[0].pageX), { passive: true });
                scroller.addEventListener("touchend", end);
            });
        });
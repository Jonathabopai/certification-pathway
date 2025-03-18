
// Helper function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
        rect.bottom >= 0
    );
}

// Handle scroll events for animations
document.addEventListener('DOMContentLoaded', function() {
    // References to DOM elements
    const header = document.querySelector('.header');
    const pathLine = document.getElementById('path-progress');
    const certificationItems = document.querySelectorAll('.certification-item');
    const pathSections = document.querySelectorAll('.path-section');
    
    // Initial check for elements in viewport
    checkElements();

    // Check if elements are in viewport and animate them
    function checkElements() {
        // Update path line height
        const lastSection = pathSections[pathSections.length - 1];
        const lastSectionRect = lastSection.getBoundingClientRect();
        const pathEnd = lastSectionRect.bottom;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        // Calculate the progress percentage
        const scrollPercentage = (documentScrollTop + viewportHeight) / documentHeight;
        const pathLineHeight = scrollPercentage * (pathEnd - 100); // Subtract some offset
        
        // Set the path line height with a smooth animation
        pathLine.style.height = `${Math.max(0, pathLineHeight)}px`;

        // Check each certification item
        certificationItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('active');
            }
        });

        // Add scrolled class to header if scrolled down
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', function() {
        requestAnimationFrame(checkElements);
    });

    // Listen for resize events
    window.addEventListener('resize', function() {
        requestAnimationFrame(checkElements);
    });

    // Initial call to check elements
    checkElements();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the header height for offset
                const headerHeight = header.offsetHeight;
                
                // Calculate the position to scroll to
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                // Smooth scroll to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

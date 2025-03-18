
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
    const certificationItems = document.querySelectorAll('.certification-item');
    const pathSections = document.querySelectorAll('.path-section');
    
    // Create path elements
    createPathElements();
    
    // Initial check for elements in viewport
    checkElements();

    // Create the curved path elements
    function createPathElements() {
        const pathContainer = document.querySelector('.certification-path');
        
        // Create main vertical line
        const mainLine = document.createElement('div');
        mainLine.className = 'path-line';
        mainLine.id = 'path-progress';
        pathContainer.appendChild(mainLine);
        
        // Create path segments and curves
        const numberOfGroups = document.querySelectorAll('.path-group').length;
        
        for (let i = 0; i < numberOfGroups; i++) {
            // Create a marker for each section
            const marker = document.createElement('div');
            marker.className = 'path-marker';
            marker.id = `marker-${i}`;
            marker.style.top = `${200 + i * 600}px`;
            pathContainer.appendChild(marker);
            
            if (i < numberOfGroups - 1) {
                // Create alternating path curves
                if (i % 2 === 0) {
                    // Curve right
                    const curve = document.createElement('div');
                    curve.className = 'path-curve';
                    curve.id = `curve-${i}`;
                    curve.style.top = `${300 + i * 600}px`;
                    curve.style.left = '50%';
                    curve.style.transform = 'rotate(45deg) translateX(-50%)';
                    pathContainer.appendChild(curve);
                    
                    // Horizontal segment after curve
                    const segment = document.createElement('div');
                    segment.className = 'path-segment';
                    segment.id = `segment-${i}`;
                    segment.style.top = `${350 + i * 600}px`;
                    segment.style.left = '50%';
                    segment.style.width = '150px';
                    segment.style.height = '10px';
                    segment.style.transform = 'translateX(0)';
                    pathContainer.appendChild(segment);
                } else {
                    // Curve left
                    const curve = document.createElement('div');
                    curve.className = 'path-curve';
                    curve.id = `curve-${i}`;
                    curve.style.top = `${300 + i * 600}px`;
                    curve.style.left = '40%';
                    curve.style.transform = 'rotate(225deg)';
                    pathContainer.appendChild(curve);
                    
                    // Horizontal segment after curve
                    const segment = document.createElement('div');
                    segment.className = 'path-segment';
                    segment.id = `segment-${i}`;
                    segment.style.top = `${350 + i * 600}px`;
                    segment.style.right = '60%';
                    segment.style.width = '150px';
                    segment.style.height = '10px';
                    pathContainer.appendChild(segment);
                }
                
                // Vertical segment
                const vertSegment = document.createElement('div');
                vertSegment.className = 'path-segment';
                vertSegment.id = `vert-segment-${i}`;
                vertSegment.style.top = `${400 + i * 600}px`;
                vertSegment.style.left = i % 2 === 0 ? '70%' : '30%';
                vertSegment.style.height = '200px';
                pathContainer.appendChild(vertSegment);
            }
        }
    }

    // Check if elements are in viewport and animate them
    function checkElements() {
        // Get scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        // Calculate total scroll progress (0 to 1)
        const scrollProgress = (scrollTop + viewportHeight) / documentHeight;
        
        // Update main path line
        const mainLine = document.getElementById('path-progress');
        const pathHeight = Math.min(documentHeight * 0.8, scrollTop * 1.5);
        mainLine.style.height = `${Math.max(0, pathHeight)}px`;
        
        // Check and animate path elements (curves, segments, markers)
        const curves = document.querySelectorAll('.path-curve');
        const segments = document.querySelectorAll('.path-segment');
        const markers = document.querySelectorAll('.path-marker');
        
        curves.forEach((curve, index) => {
            const triggerPosition = 200 + index * 600;
            if (scrollTop > triggerPosition) {
                curve.style.opacity = '1';
            }
        });
        
        segments.forEach((segment, index) => {
            const triggerPosition = 250 + Math.floor(index/2) * 600;
            if (scrollTop > triggerPosition) {
                segment.style.opacity = '1';
                
                // If it's a vertical segment, animate its height
                if (segment.id.includes('vert')) {
                    const maxHeight = 200;
                    const startPosition = triggerPosition;
                    const endPosition = startPosition + 400;
                    const progress = Math.min(1, Math.max(0, (scrollTop - startPosition) / (endPosition - startPosition)));
                    
                    segment.style.height = `${Math.max(10, progress * maxHeight)}px`;
                }
            }
        });
        
        markers.forEach((marker, index) => {
            const triggerPosition = 150 + index * 600;
            if (scrollTop > triggerPosition) {
                marker.classList.add('active');
            } else {
                marker.classList.remove('active');
            }
        });

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

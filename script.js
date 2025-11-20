// Vinyl collection organized by genre
let vinyls = [
    // Rock
    { id: 1, title: "IV", artist: "Led Zeppelin", year: 1971, price: 48.99, image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop", audio: null },
    { id: 2, title: "Rumours", artist: "Fleetwood Mac", year: 1977, price: 41.99, image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=400&h=400&fit=crop", audio: null },
    { id: 3, title: "A Night at the Opera", artist: "Queen", year: 1975, price: 52.99, image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop", audio: null },
    { id: 4, title: "Hotel California", artist: "The Eagles", year: 1976, price: 44.99, image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop", audio: null },
    { id: 5, title: "Ziggy Stardust", artist: "David Bowie", year: 1972, price: 49.99, image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop", audio: null },
    { id: 6, title: "Sticky Fingers", artist: "The Rolling Stones", year: 1971, price: 46.99, image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&h=400&fit=crop", audio: null },
    { id: 7, title: "Abbey Road", artist: "The Beatles", year: 1969, price: 55.99, image: "https://images.unsplash.com/photo-1608433319511-dfe8ea4cbd3c?w=400&h=400&fit=crop", audio: null },
    { id: 8, title: "Appetite for Destruction", artist: "Guns N' Roses", year: 1987, price: 42.99, image: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=400&h=400&fit=crop", audio: null },
    { id: 9, title: "Slippery When Wet", artist: "Bon Jovi", year: 1986, price: 38.99, image: "https://images.unsplash.com/photo-1615887023516-9e0854d1c7e1?w=400&h=400&fit=crop", audio: null },
    { id: 10, title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973, price: 58.99, image: "FILES/COVERS/DARK SIDE OF THE MOON C.png", audio: "FILES/AUDIO/DARK SIDE OF THE MOON A.wav" },
    { id: 11, title: "Pendulum", artist: "Creedence Clearwater Revival", year: 1970, price: 39.99, image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=400&h=400&fit=crop", audio: null },
    
    // Jazz
    { id: 12, title: "Kind of Blue", artist: "Miles Davis", year: 1959, price: 62.99, image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop", audio: null },
    { id: 13, title: "A Love Supreme", artist: "John Coltrane", year: 1965, price: 59.99, image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop", audio: null },
    { id: 14, title: "Lady in Satin", artist: "Billie Holiday", year: 1958, price: 54.99, image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop", audio: null },
    { id: 15, title: "What a Wonderful World", artist: "Louis Armstrong", year: 1968, price: 48.99, image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&h=400&fit=crop", audio: null },
    { id: 16, title: "Time Out", artist: "Dave Brubeck", year: 1959, price: 56.99, image: "https://images.unsplash.com/photo-1608433319511-dfe8ea4cbd3c?w=400&h=400&fit=crop", audio: null },
    { id: 17, title: "Mingus Ah Um", artist: "Charles Mingus", year: 1959, price: 58.99, image: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=400&h=400&fit=crop", audio: null },
    { id: 18, title: "Chet Baker Sings", artist: "Chet Baker", year: 1954, price: 64.99, image: "https://images.unsplash.com/photo-1615887023516-9e0854d1c7e1?w=400&h=400&fit=crop", audio: null },
    { id: 19, title: "Head Hunters", artist: "Herbie Hancock", year: 1973, price: 52.99, image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop", audio: null },
    
    // Pop, Disco & New Wave
    { id: 20, title: "Arrival", artist: "ABBA", year: 1976, price: 36.99, image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=400&h=400&fit=crop", audio: null },
    { id: 21, title: "Super Trouper", artist: "ABBA", year: 1980, price: 34.99, image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop", audio: null },
    { id: 22, title: "Saturday Night Fever", artist: "Bee Gees", year: 1977, price: 42.99, image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop", audio: null },
    { id: 23, title: "Bad Girls", artist: "Donna Summer", year: 1979, price: 38.99, image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop", audio: null },
    { id: 24, title: "C'est Chic", artist: "Chic", year: 1978, price: 39.99, image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&h=400&fit=crop", audio: null },
    { id: 25, title: "Thriller", artist: "Michael Jackson", year: 1982, price: 49.99, image: "https://images.unsplash.com/photo-1608433319511-dfe8ea4cbd3c?w=400&h=400&fit=crop", audio: null },
    { id: 26, title: "Purple Rain", artist: "Prince", year: 1984, price: 46.99, image: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=400&h=400&fit=crop", audio: null },
    { id: 27, title: "All 'N All", artist: "Earth, Wind & Fire", year: 1977, price: 41.99, image: "https://images.unsplash.com/photo-1615887023516-9e0854d1c7e1?w=400&h=400&fit=crop", audio: null },
    { id: 28, title: "Like a Virgin", artist: "Madonna", year: 1984, price: 37.99, image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop", audio: null },
    { id: 29, title: "Speaking in Tongues", artist: "Talking Heads", year: 1983, price: 43.99, image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=400&h=400&fit=crop", audio: null },
    { id: 30, title: "Toto IV", artist: "Toto", year: 1982, price: 40.99, image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop", audio: null },
    { id: 31, title: "She's So Unusual", artist: "Cyndi Lauper", year: 1983, price: 35.99, image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop", audio: null },
    { id: 32, title: "The Queen Is Dead", artist: "The Smiths", year: 1986, price: 44.99, image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop", audio: null }
];

let currentAudio = null;
let currentPlayingId = null;

function renderVinyls() {
    const grid = document.getElementById('vinylGrid');
    grid.innerHTML = '';
    
    const containerWidth = grid.offsetWidth || window.innerWidth - 40;
    const containerHeight = grid.offsetHeight || window.innerHeight - 40;
    const cardWidth = 250;
    const spacing = 80;
    
    // Calculate grid layout
    const cols = Math.floor(containerWidth / (cardWidth + spacing));
    const rows = Math.ceil(vinyls.length / cols);
    
    const cellWidth = containerWidth / cols;
    const cellHeight = containerHeight / rows;

    vinyls.forEach((vinyl, index) => {
        const card = document.createElement('div');
        card.className = 'vinyl-card';
        
        // Calculate grid cell
        const col = index % cols;
        const row = Math.floor(index / cols);
        
        // Center position in cell with random offset
        const cellCenterX = col * cellWidth + (cellWidth / 2) - (cardWidth / 2);
        const cellCenterY = row * cellHeight + (cellHeight / 2) - (cardWidth / 2);
        
        // Add random offset within cell (±60% of cell size)
        const offsetX = (Math.random() - 0.5) * cellWidth * 0.6;
        const offsetY = (Math.random() - 0.5) * cellHeight * 0.6;
        
        const randomX = cellCenterX + offsetX;
        const randomY = cellCenterY + offsetY;
        
        // Random rotation between -10 and 10 degrees
        const rotation = Math.random() * 20 - 10;
        
        // Random z-index for stacking effect
        const zIndex = Math.floor(Math.random() * 5) + 1;
        
        card.style.left = randomX + 'px';
        card.style.top = randomY + 'px';
        card.style.transform = `rotate(${rotation}deg)`;
        card.style.zIndex = zIndex;
        
        card.innerHTML = `
            <div class="vinyl-image-container">
                <img src="${vinyl.image}" alt="${vinyl.title}" class="vinyl-image" id="image-${vinyl.id}">
            </div>
            <div class="vinyl-info">
                <div class="vinyl-title">${vinyl.title}</div>
                <div class="vinyl-artist">${vinyl.artist}</div>
                <div class="vinyl-details">
                    <span class="vinyl-year">${vinyl.year}</span>
                    <span class="vinyl-price">$${vinyl.price.toFixed(2)}</span>
                </div>
                <div class="audio-controls">
                    <button class="play-btn" id="play-${vinyl.id}" onclick="togglePlay(${vinyl.id}); event.stopPropagation();" ${!vinyl.audio ? 'disabled' : ''}>
                        ${vinyl.audio ? '▶ Play' : '🎵 No Audio'}
                    </button>
                </div>
                <button class="buy-btn" onclick="buyVinyl(${vinyl.id}); event.stopPropagation();">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
        
        // Check if card is in bottom area and flip popup if needed
        card.addEventListener('mouseenter', function() {
            const popup = this.querySelector('.vinyl-info');
            const cardRect = this.getBoundingClientRect();
            const popupHeight = 250; // Approximate popup height
            
            // If popup would go off bottom of screen, position it above the card
            if (cardRect.bottom + popupHeight > window.innerHeight) {
                popup.style.top = 'auto';
                popup.style.bottom = '100%';
                popup.style.marginTop = '0';
                popup.style.marginBottom = '8px';
            } else {
                popup.style.top = '100%';
                popup.style.bottom = 'auto';
                popup.style.marginTop = '8px';
                popup.style.marginBottom = '0';
            }
        });
    });
}


function togglePlay(id) {
    const vinyl = vinyls.find(v => v.id === id);
    if (!vinyl || !vinyl.audio) return;

    const playBtn = document.getElementById(`play-${id}`);

    if (currentPlayingId === id && currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playBtn.textContent = '▶ Play';
        playBtn.classList.remove('playing');
        currentPlayingId = null;
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (currentPlayingId) {
                const prevBtn = document.getElementById(`play-${currentPlayingId}`);
                if (prevBtn) {
                    prevBtn.textContent = '▶ Play';
                    prevBtn.classList.remove('playing');
                }
            }
        }

        currentAudio = new Audio(vinyl.audio);
        currentAudio.play();
        playBtn.textContent = '⏸ Pause';
        playBtn.classList.add('playing');
        currentPlayingId = id;

        currentAudio.onended = () => {
            playBtn.textContent = '▶ Play';
            playBtn.classList.remove('playing');
            currentPlayingId = null;
        };
    }
}

function buyVinyl(id) {
    const vinyl = vinyls.find(v => v.id === id);
    if (vinyl) {
        alert(`Added "${vinyl.title}" by ${vinyl.artist} to cart!\nPrice: $${vinyl.price.toFixed(2)}`);
    }
}

// Initial render
renderVinyls();

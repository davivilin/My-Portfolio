(function() {
    // === PLAYLIST ===
    const playlist = [
        { title: "DreamOS_Startup.mp3", src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3" },
        { title: "Coding_Night.wav", src: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_1973685322.mp3" },
        { title: "LoFi_Chill.mp3", src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3" }
    ];
    
    let currentTrack = 0;
    let isPlaying = false;
    const audio = new Audio(playlist[0].src);
    audio.volume = 0.3; 

    // 1. INJECT CSS
    const style = document.createElement('style');
    style.textContent = `
        /* === MAIN WINDOW (White Body) === */
        #music-player-window {
            position: fixed; bottom: 20px; left: 20px; width: 280px; z-index: 9000;
            
            /* Restored White Background */
            background: rgba(255, 255, 255, 0.95);
            border: 2px solid #8b5cf6; /* DreamOS Purple Border */
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.25);
            
            font-family: 'VT323', monospace;
            display: flex; flex-direction: column;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
        }
        
        /* Hidden State */
        #music-player-window.minimized {
            transform: translateY(200%);
            opacity: 0;
            pointer-events: none;
        }

        /* === TITLE BAR (Light Grey) === */
        .music-title-bar {
            background: #f3f4f6; 
            padding: 8px 12px; 
            border-bottom: 2px solid #8b5cf6;
            display: flex; justify-content: space-between; align-items: center;
            font-size: 16px; 
            color: #5b21b6; /* Purple Text */
            font-weight: bold;
            border-radius: 6px 6px 0 0;
        }
        
        .window-controls span { cursor: pointer; margin-left: 10px; font-weight: bold; font-size: 14px; }
        .window-controls span:hover { color: #8b5cf6; }
        .music-close:hover { color: #ef4444 !important; }
        
        .player-content { padding: 15px; display: flex; flex-direction: column; gap: 15px; }

        /* === SCREEN (The "Terminal" Part) === */
        .player-screen {
            background: #110c1d; /* Deep Purple/Black Background */
            color: #4ade80;      /* Terminal Green Text */
            padding: 10px; 
            border: 2px inset #e5e7eb;
            border-radius: 4px; 
            overflow: hidden; 
            white-space: nowrap; 
            font-size: 1.1rem;
        }
        
        /* The ">" Prompt */
        .player-screen::before { content: "> "; color: #a78bfa; }

        .scrolling-text { display: inline-block; padding-left: 100%; animation: marquee 10s linear infinite; }
        @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }

        /* === BUTTONS (White) === */
        .player-controls { display: flex; justify-content: space-between; align-items: center; }
        
        .ctrl-btn {
            background: #fff; 
            border: 2px solid #8b5cf6; 
            color: #5b21b6; /* Purple Icons */
            width: 35px; height: 35px; 
            border-radius: 50%; /* Circle Buttons */
            display: flex; align-items: center; justify-content: center; 
            cursor: pointer; 
            transition: all 0.2s;
        }
        
        .ctrl-btn:hover { 
            background: #8b5cf6; 
            color: #fff; 
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3);
        }
        
        #play-btn { width: 45px; height: 45px; font-size: 18px; }

        /* === VOLUME SLIDER === */
        .volume-container { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #5b21b6; }
        
        input[type=range] {
            width: 100%; height: 4px; 
            accent-color: #8b5cf6; 
            cursor: pointer;
        }

        /* === MINIMIZED ICON === */
        #music-minimized-icon {
            position: fixed; bottom: 20px; left: 20px; z-index: 8999;
            width: 50px; height: 50px;
            background: #8b5cf6; 
            border: 2px solid white; 
            color: white;
            border-radius: 50%;
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.5);
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            transform: scale(0);
        }
        
        #music-minimized-icon.visible { transform: scale(1); }
        #music-minimized-icon i { font-size: 24px; }
        #music-minimized-icon:hover { background: #7c3aed; }
        
        #music-minimized-icon.playing { animation: spin 3s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);

    // 2. INJECT HTML
    const container = document.createElement('div');
    container.innerHTML = `
        <div id="music-minimized-icon" onclick="restorePlayer()">
            <i class="fas fa-compact-disc"></i>
        </div>

        <div id="music-player-window">
            <div class="music-title-bar">
                <span>music.exe</span>
                <div class="window-controls">
                    <span title="Minimize" onclick="minimizePlayer()">_</span>
                    <span class="music-close" title="Close" onclick="closePlayer()">×</span>
                </div>
            </div>
            <div class="player-content">
                <div class="player-screen">
                    <span id="track-name" class="scrolling-text">DreamOS_Startup.mp3</span>
                </div>
                
                <div class="player-controls">
                    <button class="ctrl-btn" id="prev-btn"><i class="fas fa-step-backward"></i></button>
                    <button class="ctrl-btn" id="play-btn"><i class="fas fa-play"></i></button>
                    <button class="ctrl-btn" id="next-btn"><i class="fas fa-step-forward"></i></button>
                </div>
                
                <div class="volume-container">
                    <i class="fas fa-volume-down"></i>
                    <input type="range" id="vol-slider" min="0" max="1" step="0.1" value="0.3">
                    <i class="fas fa-volume-up"></i>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(container);

    // 3. LOGIC
    const playerWindow = document.getElementById('music-player-window');
    const minIcon = document.getElementById('music-minimized-icon');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const trackName = document.getElementById('track-name');
    const volSlider = document.getElementById('vol-slider');

    window.minimizePlayer = function() {
        playerWindow.classList.add('minimized');
        minIcon.classList.add('visible');
    };

    window.restorePlayer = function() {
        playerWindow.classList.remove('minimized');
        minIcon.classList.remove('visible');
    };

    window.closePlayer = function() {
        playerWindow.style.display = 'none';
        audio.pause();
    };

    function updateTrack() {
        trackName.textContent = playlist[currentTrack].title;
        trackName.classList.remove('scrolling-text');
        void trackName.offsetWidth; 
        trackName.classList.add('scrolling-text');
    }

    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            minIcon.classList.remove('playing');
        } else {
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            minIcon.classList.add('playing');
        }
        isPlaying = !isPlaying;
    }

    function nextTrack() {
        currentTrack = (currentTrack + 1) % playlist.length;
        audio.src = playlist[currentTrack].src;
        updateTrack();
        if (isPlaying) audio.play();
    }

    function prevTrack() {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        audio.src = playlist[currentTrack].src;
        updateTrack();
        if (isPlaying) audio.play();
    }

    playBtn.addEventListener('click', togglePlay);
    nextBtn.addEventListener('click', nextTrack);
    prevBtn.addEventListener('click', prevTrack);
    volSlider.addEventListener('input', (e) => { audio.volume = e.target.value; });
    audio.addEventListener('ended', nextTrack);
})();
document.addEventListener('DOMContentLoaded', function () {
    const playlistContainer = document.getElementById('playlistContainer');
    const addPlaylistBtn = document.getElementById('addPlaylistBtn');
    
    function createPlaylist(name) {
        const playlist = document.createElement('div');
        playlist.classList.add('playlist');
        
        // Adding a delay to let the CSS animation take effect
        setTimeout(() => {
            playlist.classList.add('fade-in');
        }, 10);

        const playlistTitle = document.createElement('h3');
        playlistTitle.innerText = name;
        playlistTitle.classList.add('playlist-title');
        playlistTitle.addEventListener('dblclick', () => makeEditable(playlistTitle));

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';
        deleteBtn.addEventListener('click', () => playlist.remove());

        playlist.appendChild(playlistTitle);
        playlist.appendChild(deleteBtn);
        playlistContainer.appendChild(playlist);
    }

    window.createPlaylist = createPlaylist; // Expose createPlaylist for use in popup.js
});

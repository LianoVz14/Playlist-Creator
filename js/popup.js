document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const playlistNameInput = document.getElementById('playlistName');
    const createPlaylistBtn = document.getElementById('createPlaylistBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');

    const addPlaylistBtn = document.getElementById('addPlaylistBtn');

    // Open the pop-up when the add button is clicked
    addPlaylistBtn.addEventListener('click', function () {
        popup.style.display = 'block';
        playlistNameInput.focus();  // Focus on the input field
    });

    // Close the pop-up when the close button is clicked
    closePopupBtn.addEventListener('click', function () {
        closePopup();
    });

    // Create a new playlist when the create button is clicked
    createPlaylistBtn.addEventListener('click', function () {
        handleCreatePlaylist();
    });

    // Handle creating a playlist when Enter is pressed in the input
    playlistNameInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            handleCreatePlaylist();
        }
    });

    // Function to create a playlist
    function handleCreatePlaylist() {
        const name = playlistNameInput.value.trim();  // Get the input value and trim whitespace
        if (name) {
            createPlaylist(name);  // Call the function to create a playlist
            closePopup();
        }
    }

    // Function to close the pop-up and clear the input field
    function closePopup() {
        popup.style.display = 'none';
        playlistNameInput.value = ''; // Clear the input field
    }
});

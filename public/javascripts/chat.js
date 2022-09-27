// Establish connection
// For connection at front end
var socket = io.connect('http://localhost:3000');

// Query DOM
var message = document.getElementById('message');
var user_handle = document.getElementById('user_handle');
var btn = document.getElementById('send');
var output_window = document.getElementById('output_window');
var typing_text = document.getElementById('typing_text');

// When send button is clicked
btn.addEventListener('click', function() {
    // Emits message from web socket to server
    // first param is name of the message and second param will what is message
    socket.emit('chat', {
        message: message.value,
        user_handle: user_handle.value
    });
});

// Listen for events from BE
socket.on('chat', function(data) {
    output_window.innerHTML += "<p><strong>" + data.user_handle + ": </strong>" + data.message + "</p>"
    // Typing text will be removed now
    typing_text.innerHTML = "";
});

// Event for when User 1 is typing, it should broadcast in other people chats that User 1 is typing
// Keypress event can be used here (STEP 1 for message typing)
message.addEventListener('keypress', function() {
    // User handle will be displayed when other person is typing
    socket.emit('typing', user_handle.value);
});

// Now handle msg after response from BE (STEP 3 for message typing)
socket.on('typing', function(data) {
    typing_text.innerHTML = "<p><em>" + data + " is typing...</em></p>";
});


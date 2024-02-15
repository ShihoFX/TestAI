const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

function handleKeyPress(event) {
    if (event.key === 'Enter') {
      sendMessage() 
    }
  }

function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
        appendMessage('user', userMessage);
        userInput.value = '';

        // You can implement your chatbot logic here.
        // For simplicity, let's just have a basic response.
        const botResponse = getBotResponse(userMessage);

        // Simulate a delay before the bot responds.
        setTimeout(() => {
            appendMessage('bot', botResponse);
        }, 1000);
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    
    if ( sender === "user") {
      messageElement.classList.add("user-message-container");
      messageElement.innerHTML = `<div class="user-message">${message}</div>`;
    } else {
      messageElement.innerHTML = `<div class="bot-message">${message}</div>`;
    };
    chatContainer.appendChild(messageElement);

    // Scroll to the bottom to show the latest message.
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(userMessage) {
    // Simple predefined responses based on user input.
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I help you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I am just a computer program, but thanks for asking!';
    } else {
        return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
}
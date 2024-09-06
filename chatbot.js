document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.createElement("button");
    chatButton.innerText = "ℹ️";
    chatButton.classList.add("chat-button");
    document.body.appendChild(chatButton);

    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");
    document.body.appendChild(chatContainer);

    const chatHeader = document.createElement("div");
    chatHeader.classList.add("chat-header");
    chatHeader.style.backgroundColor = "#724ae8"; // Purple background color
    chatHeader.style.color = "#ffffff";
    chatHeader.style.marginTop = "5px";
    chatHeader.style.padding = "5px";
    chatHeader.innerText = "Hi👋!!How may I help you today?";
    chatContainer.appendChild(chatHeader);

    const chatContent = document.createElement("div");
    chatContent.classList.add("chat-content");
    chatContainer.appendChild(chatContent);

    const chatInput = document.createElement("input");
    chatInput.classList.add("chat-input");
    chatInput.type = "text";
    chatInput.placeholder = "Type your message...";
    chatInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const message = chatInput.value;
            if (message.trim() !== "") {
                displayUserMessage("👤: " + message);
                displayBotMessage("🤖: " + getRandomBotResponse());
                chatInput.value = "";
            }
        }
    });
    chatContainer.appendChild(chatInput);

    function displayUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.innerText = message;
        chatContent.appendChild(userMessage);
    }

    function displayBotMessage(message) {
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.innerText = message;
        chatContent.appendChild(botMessage);
    }

    function getRandomBotResponse() {
        const responses = [
            "I'm a simple bot. How can I assist you today?",
            "Thank you for reaching out. Our team is here to help!",
            "We prioritize your health. What specific information are you looking for?",
            "Feel free to ask any questions related to our services or medical inquiries.",
            "Your well-being is important to us. How may I support you?",
        ];

        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }

    chatButton.addEventListener("click", function () {
        chatContainer.style.display =
            chatContainer.style.display === "none" ||
                chatContainer.style.display === ""
                ? "block"
                : "none";
    });
});

// Placeholder for functionality (e.g., sending messages)
document.querySelector("button").addEventListener("click", function () {
    const input = document.querySelector("input");
    const chatBox = document.querySelector(".chat-box");

    if (input.value.trim() !== "") {
        const newMessage = document.createElement("div");
        newMessage.className = "message sent";
        newMessage.textContent = input.value;
        chatBox.appendChild(newMessage);

        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
    }
});

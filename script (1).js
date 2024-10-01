document.getElementById("proposal-btn").onclick = function() {
    document.getElementById("response-modal").style.display = "block";
    document.getElementById("response-text").innerText = "I can't wait to hear your answer!";
};

function closeModal() {
    document.getElementById("response-modal").style.display = "none";
}

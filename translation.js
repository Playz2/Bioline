async function translateText() {
    let text = document.getElementById("inputText").value;
    if (!text.trim()) {
        alert("Please enter text to translate!");
        return;
    }

    let response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ro`);
    let data = await response.json();
    
    if (data.responseData) {
        document.getElementById("outputText").innerText = data.responseData.translatedText;
    } else {
        document.getElementById("outputText").innerText = "Translation error!";
    }
}

function copyText() {
    let output = document.getElementById("outputText").innerText;
    if (output && output !== "Translation will appear here...") {
        navigator.clipboard.writeText(output);
        alert("Translation copied!");
    } else {
        alert("No translation to copy!");
    }
}
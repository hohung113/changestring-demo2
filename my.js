function replaceWordsWithFont() {
    var inputText = document.getElementById('inputText').value;
    var resultText = document.getElementById('resultText');
    
  
    inputText = inputText.replace(/\.\s/g, '.<br>');

    
    inputText = inputText.replace(/\n/g, '<br>');

    var convertedText = inputText.split('<br>').map(function(sentence) {
        return sentence.split('.').map(function(part) {
            return convertToUnicodeFont(part) + '.';
        }).join(' ');
    }).join('</p><p>');

    resultText.innerHTML = '<p>' + convertedText + '</p>';
}

function convertToUnicodeFont(text) {
    var convertedText = text.split('').map(function(char) {
        return convertCharToUnicodeFont(char);
    }).join('');

    return convertedText;
}

function convertCharToUnicodeFont(char) {
    var convertedChar = char;

    switch (char.toLowerCase()) {
        case 'e':
            convertedChar = '𝚎';
            break;
        case 'u':
            convertedChar = '𝚞';
            break;
        case 'a':
            convertedChar = '𝚊';
            break;
        case 'b':
            convertedChar = '𝚋';
            break;
        case 'd':
            convertedChar = '𝚍';
            break;
        case 'q':
            convertedChar = '𝚚';
            break;
        case 'r':
            convertedChar = '𝚛';
            break;
        case 'y':
            convertedChar = '𝚢';
            break;
        case 'o':
            convertedChar = '𝚘';
            break;
        case 'p':
            convertedChar = '𝚙';
            break;
        case 'f':
            convertedChar = '𝚏';
            break;
        case 'g':
            convertedChar = '𝚐';
            break;
        case '<':
            convertedChar = '&lt;';
            break;
        case '>':
            convertedChar = '&gt;';
            break;
        default:
            break;
    }

    return convertedChar;
}
function copyToClipboard() {
    var outputText = document.getElementById('resultText');
    var textToCopy = outputText.textContent; // Lấy nội dung trong phần output

    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

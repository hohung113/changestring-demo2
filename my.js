
        function replaceWordsWithFont() {
            var input = document.getElementById('inputText').value;
            var replacedText = '';

            for (var i = 0; i < input.length; i++) {
                var char = input.charAt(i);
                var replacedChar = convertToUnicodeFont(char);
                replacedText += replacedChar;
            }

            document.getElementById('resultText').innerHTML = replacedText;
        }

        function convertToUnicodeFont(char) {
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
                default:
                    break;
            }

            return convertedChar;
        }
    
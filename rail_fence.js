function railFenceEncrypt(plainText, rails) {
    var encryptedText = "";
    var fence = [];

    // Initialize the fence
    for (var i = 0; i < rails; i++) {
        fence[i] = [];
    }

    var rail = 0;
    var direction = 1;

    // Build the fence pattern
    for (var i = 0; i < plainText.length; i++) {
        fence[rail].push(plainText.charAt(i));

        // Move to the next rail
        rail += direction;

        // Reverse the direction if reaching the top or bottom rail
        if (rail === 0 || rail === rails - 1) {
            direction *= -1;
        }
    }

    // Read the encrypted text from the fence
    for (var i = 0; i < rails; i++) {
        encryptedText += fence[i].join("");
    }

    return encryptedText;
}
// Rail Fence Decryption
function railFenceDecrypt(encryptedText, rails) {
    var decryptedText = "";
    var fence = [];

    // Initialize the fence
    for (var i = 0; i < rails; i++) {
        fence[i] = [];
    }

    var rail = 0;
    var direction = 1;

    // Build the fence pattern
    for (var i = 0; i < encryptedText.length; i++) {
        fence[rail].push(null); // Reserve a position for the character

        // Move to the next rail
        rail += direction;

        // Reverse the direction if reaching the top or bottom rail
        if (rail === 0 || rail === rails - 1) {
            direction *= -1;
        }
    }

    var index = 0;

    // Fill the fence with encrypted text characters
    for (var i = 0; i < rails; i++) {
        for (var j = 0; j < fence[i].length; j++) {
            fence[i][j] = encryptedText.charAt(index);
            index++;
        }
    }

    rail = 0;
    direction = 1;

    // Read the decrypted text from the fence
    for (var i = 0; i < encryptedText.length; i++) {
        decryptedText += fence[rail].shift();

        // Move to the next rail
        rail += direction;

        // Reverse the direction if reaching the top or bottom rail
        if (rail === 0 || rail === rails - 1) {
            direction *= -1;
        }
    }

    return decryptedText;
}
  function encrypt() {
    var text = document.getElementById("input-text").value;
    var numRails = document.getElementById("num-rails").value;
  
    if (text.trim() === "" || numRails.trim() === "") {
      alert("Please enter the text and number of rails.");
      return;
    }
  
    var cipherText = railFenceEncrypt(text, parseInt(numRails));
    document.getElementById("output-text").value = cipherText;
  
}
  
  function decrypt() {
    var cipherText = document.getElementById("input-text").value;
    var numRails = document.getElementById("num-rails").value;
  
    if (cipherText.trim() === "" || numRails.trim() === "") {
      alert("Please enter the ciphertext and number of rails.");
      return;
    }
  
    var plainText = railFenceDecrypt(cipherText, parseInt(numRails));
    document.getElementById("output-text").value = plainText;
  
 
  }
  document.getElementById("form").addEventListener("click", function(event) {
    if (event.target && event.target.matches("button")) {
      event.preventDefault();
      var action = event.target.getAttribute("data-action");
  
      if (action === "encrypt") {
        encrypt();
      } else if (action === "decrypt") {
        decrypt();
      }
    }
  });
  
  function encrypt() {
    var plainText = document.getElementById("input-text").value;
    var numRails = document.getElementById("num-rails").value;
  
    if (plainText.trim() === "" || numRails.trim() === "") {
      alert("Please enter the plaintext and number of rails.");
      return;
    }
  
    var cipherText = railFenceEncrypt(plainText, parseInt(numRails));
    document.getElementById("output-text").value = cipherText;
  }
  
  function decrypt() {
    var cipherText = document.getElementById("input-text").value;
    var numRails = document.getElementById("num-rails").value;
  
    if (cipherText.trim() === "" || numRails.trim() === "") {
      alert("Please enter the ciphertext and number of rails.");
      return;
    }
  
    var plainText = railFenceDecrypt(cipherText, parseInt(numRails));
    document.getElementById("output-text").value = plainText;
  }
  

   
  
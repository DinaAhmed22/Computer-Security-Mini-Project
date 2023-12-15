  // Row Transposition Encryption
  function rowTranspositionEncrypt(plainText, key) {
    var numRows = Math.ceil(plainText.length / key.length);
    var numCols = key.length;
    var matrix = [];
  
    // Create the matrix
    for (var i = 0; i < numRows; i++) {
      matrix[i] = [];
      for (var j = 0; j < numCols; j++) {
        var index = i * numCols + j;
        if (index < plainText.length) {
          matrix[i][j] = plainText.charAt(index);
        } else {
          matrix[i][j] = " ";
        }
      }
    }
  
    // Rearrange the columns based on the key
    var sortedKey = key.split("").sort().join("");
    var sortedIndices = [];
    for (var i = 0; i < numCols; i++) {
      var char = key.charAt(i);
      var index = sortedKey.indexOf(char);
      sortedIndices.push(index);
    }
  
    // Read the encrypted text row by row
    var encryptedText = "";
    for (var i = 0; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
        var colIndex = sortedIndices[j];
        encryptedText += matrix[i][colIndex];
      }
    }
  
    return encryptedText;
  }
  
  // Row Transposition Decryption
  function rowTranspositionDecrypt(encryptedText, key) {
    var numRows = Math.ceil(encryptedText.length / key.length);
    var numCols = key.length;
    var matrix = [];
  
    // Create the matrix
    for (var i = 0; i < numRows; i++) {
      matrix[i] = [];
    }
  
    // Rearrange the columns based on the key
    var sortedKey = key.split("").sort().join("");
    var sortedIndices = [];
    for (var i = 0; i < numCols; i++) {
      var char = key.charAt(i);
      var index = sortedKey.indexOf(char);
      sortedIndices.push(index);
    }
  
    // Fill the matrix with encrypted text column by column
    var currentIndex = 0;
    for (var j = 0; j < numCols; j++) {
      var colIndex = sortedIndices.indexOf(j);
      for (var i = 0; i < numRows; i++) {
        if (currentIndex < encryptedText.length) {
          matrix[i][colIndex] = encryptedText.charAt(currentIndex);
          currentIndex++;
        } else {
          matrix[i][colIndex] = " ";
        }
      }
    }
  
    // Read the decrypted text row by row
    var decryptedText = "";
    for (var i = 0; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
        decryptedText += matrix[i][j];
      }
    }
  
    return decryptedText;
  }

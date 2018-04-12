# Googlesheet Scripts
//below is the script to paste into tools --> script editor in google sheets
//in order to use the MD5 function to create a unique key

function MD5 (input) {

  var results = [];

  for (var j=0; j<input.length; j++) {
    console.info('Running for %s (%d)', input[j], j)
    var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, input[j]);
    var txtHash = '';
    for (i = 0; i < rawHash.length; i++) {
      var hashVal = rawHash[i];
      if (hashVal < 0) {
        hashVal += 256;
      }
      if (hashVal.toString(16).length == 1) {
        txtHash += '0';
      }
      txtHash += hashVal.toString(16);
    }
    results.push(txtHash);
  }
  return results;
}

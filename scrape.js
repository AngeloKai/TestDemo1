// function hex(buffer) {
//   var hexCodes = [];
//   var view = new DataView(buffer);
//   for (var i = 0; i < view.byteLength; i += 4) {
//     // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
//     var value = view.getUint32(i)
//     // toString(16) will give the hex representation of the number without padding
//     var stringValue = value.toString(16)
//     // We use concatenation and slice for padding
//     var padding = '00000000'
//     var paddedValue = (padding + stringValue).slice(-padding.length)
//     hexCodes.push(paddedValue);
//   }

//   // Join all the hex strings into one
//   return hexCodes.join("");
// }

// var hex = 'AA5504B10000B5'

// var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
//   return parseInt(h, 16)
// }))
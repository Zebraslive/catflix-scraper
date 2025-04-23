function hexToBinary(data) {
  let str = "";
  for (let i = 0; i < data.length; i += 2) {
      str += String.fromCharCode(parseInt(data.slice(i, i + 2), 16));
  }
  return str;
}
function xorDecrypt(data, key) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return str;
}
function decryptHexWithKey(data, key) {
    const h2b = hexToBinary(data);
    return xorDecrypt(h2b, key);
}

export { decryptHexWithKey };

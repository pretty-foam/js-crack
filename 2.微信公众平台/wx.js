var n = {};
function f(e, t) {
var n = (65535 & e) + (65535 & t);
return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function s(e, t, n, r, o, i) {
return f((a = f(f(t, e), f(r, i))) << (s = o) | a >>> 32 - s, n);
var a, s
}
function d(e, t, n, r, o, i, a) {
return s(t & n | ~t & r, e, t, o, i, a)
}
function p(e, t, n, r, o, i, a) {
return s(t & r | n & ~r, e, t, o, i, a)
}
function h(e, t, n, r, o, i, a) {
return s(t ^ n ^ r, e, t, o, i, a)
}
function m(e, t, n, r, o, i, a) {
return s(n ^ (t | ~r), e, t, o, i, a)
}
function c(e, t) {
e[t >> 5] |= 128 << t % 32,
e[14 + (t + 64 >>> 9 << 4)] = t;
var n, r, o, i, a, s = 1732584193,
c = -271733879,
u = -1732584194,
l = 271733878;
for (n = 0; n < e.length; n += 16) s = d(r = s, o = c, i = u, a = l, e[n], 7, -680876936),
l = d(l, s, c, u, e[n + 1], 12, -389564586),
u = d(u, l, s, c, e[n + 2], 17, 606105819),
c = d(c, u, l, s, e[n + 3], 22, -1044525330),
s = d(s, c, u, l, e[n + 4], 7, -176418897),
l = d(l, s, c, u, e[n + 5], 12, 1200080426),
u = d(u, l, s, c, e[n + 6], 17, -1473231341),
c = d(c, u, l, s, e[n + 7], 22, -45705983),
s = d(s, c, u, l, e[n + 8], 7, 1770035416),
l = d(l, s, c, u, e[n + 9], 12, -1958414417),
u = d(u, l, s, c, e[n + 10], 17, -42063),
c = d(c, u, l, s, e[n + 11], 22, -1990404162),
s = d(s, c, u, l, e[n + 12], 7, 1804603682),
l = d(l, s, c, u, e[n + 13], 12, -40341101),
u = d(u, l, s, c, e[n + 14], 17, -1502002290),
s = p(s, c = d(c, u, l, s, e[n + 15], 22, 1236535329), u, l, e[n + 1], 5, -165796510),
l = p(l, s, c, u, e[n + 6], 9, -1069501632),
u = p(u, l, s, c, e[n + 11], 14, 643717713),
c = p(c, u, l, s, e[n], 20, -373897302),
s = p(s, c, u, l, e[n + 5], 5, -701558691),
l = p(l, s, c, u, e[n + 10], 9, 38016083),
u = p(u, l, s, c, e[n + 15], 14, -660478335),
c = p(c, u, l, s, e[n + 4], 20, -405537848),
s = p(s, c, u, l, e[n + 9], 5, 568446438),
l = p(l, s, c, u, e[n + 14], 9, -1019803690),
u = p(u, l, s, c, e[n + 3], 14, -187363961),
c = p(c, u, l, s, e[n + 8], 20, 1163531501),
s = p(s, c, u, l, e[n + 13], 5, -1444681467),
l = p(l, s, c, u, e[n + 2], 9, -51403784),
u = p(u, l, s, c, e[n + 7], 14, 1735328473),
s = h(s, c = p(c, u, l, s, e[n + 12], 20, -1926607734), u, l, e[n + 5], 4, -378558),
l = h(l, s, c, u, e[n + 8], 11, -2022574463),
u = h(u, l, s, c, e[n + 11], 16, 1839030562),
c = h(c, u, l, s, e[n + 14], 23, -35309556),
s = h(s, c, u, l, e[n + 1], 4, -1530992060),
l = h(l, s, c, u, e[n + 4], 11, 1272893353),
u = h(u, l, s, c, e[n + 7], 16, -155497632),
c = h(c, u, l, s, e[n + 10], 23, -1094730640),
s = h(s, c, u, l, e[n + 13], 4, 681279174),
l = h(l, s, c, u, e[n], 11, -358537222),
u = h(u, l, s, c, e[n + 3], 16, -722521979),
c = h(c, u, l, s, e[n + 6], 23, 76029189),
s = h(s, c, u, l, e[n + 9], 4, -640364487),
l = h(l, s, c, u, e[n + 12], 11, -421815835),
u = h(u, l, s, c, e[n + 15], 16, 530742520),
s = m(s, c = h(c, u, l, s, e[n + 2], 23, -995338651), u, l, e[n], 6, -198630844),
l = m(l, s, c, u, e[n + 7], 10, 1126891415),
u = m(u, l, s, c, e[n + 14], 15, -1416354905),
c = m(c, u, l, s, e[n + 5], 21, -57434055),
s = m(s, c, u, l, e[n + 12], 6, 1700485571),
l = m(l, s, c, u, e[n + 3], 10, -1894986606),
u = m(u, l, s, c, e[n + 10], 15, -1051523),
c = m(c, u, l, s, e[n + 1], 21, -2054922799),
s = m(s, c, u, l, e[n + 8], 6, 1873313359),
l = m(l, s, c, u, e[n + 15], 10, -30611744),
u = m(u, l, s, c, e[n + 6], 15, -1560198380),
c = m(c, u, l, s, e[n + 13], 21, 1309151649),
s = m(s, c, u, l, e[n + 4], 6, -145523070),
l = m(l, s, c, u, e[n + 11], 10, -1120210379),
u = m(u, l, s, c, e[n + 2], 15, 718787259),
c = m(c, u, l, s, e[n + 9], 21, -343485551),
s = f(s, r),
c = f(c, o),
u = f(u, i),
l = f(l, a);
return [s, c, u, l]
}
function u(e) {
var t, n = "";
for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
return n
}
function l(e) {
var t, n = [];
for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
return n
}
function r(e) {
var t, n, r = "0123456789abcdef",
o = "";
for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n),
o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
return o
}
function o(e) {
return unescape(encodeURIComponent(e))
}
function i(e) {
return u(c(l(t = o(e)), 8 * t.length));
var t
}
function a(e, t) {
return function(e, t) {
    var n, r, o = l(e),
    i = [],
    a = [];
    for (i[15] = a[15] = void 0, 16 < o.length && (o = c(o, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n],
    a[n] = 1549556828 ^ o[n];
    return r = c(i.concat(l(t)), 512 + 8 * t.length),
    u(c(a.concat(r), 640))
} (o(e), o(t))
}
function getpwd(e, t, n) {
return t ? n ? a(t, e) : r(a(t, e)) : n ? i(e) : r(i(e))
}
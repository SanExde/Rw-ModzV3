import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
โโโโฒ*๐๐๐ ๐ ๐๐ก๐จ*โณโโโ
*%ucpn*
     
๐จ ๐ฆ ๐ ๐ฅ     
โญ *Name:* %name
โญ *Tag:* %tag
โญ *Status:* %prems
โญ *Limit:* %limit
โญ *Money:* %money
โญ *Role:* %role
โญ *Level:* %level [ %xp4levelup Xp For Levelup]
โญ *Exp:* %exp / %maxexp
โญ *Total Exp:* %totalexp

๐ง ๐ข ๐ ๐ ๐ฌ
โญ *Days:* %week %weton
โญ *Date:* %date
โญ *Islamic Date:* %dateIslamic
โญ *Time:* %wib

๐ ๐ก ๐ ๐ข
โญ *Bot Name:* %me
โญ *Mode:* %mode
โญ *Platform:* %platform
โญ *Type:* Node.Js
โญ *Baileys:* Multi Device
โญ *Prefix:* [ *%_p* ]
โญ *Up time:* %muptime
โญ *Database:* %rtotalreg dari %totalreg

๐ ๐ก ๐ ๐ข ๐ ๐  ๐
โญ *โ* = Premium
โญ *โ* = Limit
`.trimStart(),
header: 'โญโโโโโ %category ',
body: `โ โญ  %cmd %isPremium %islimit`,
footer: `โฐโโโโโ\n`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let emot = `${pickRandom(['โ', 'โโป', 'โฆ', 'โญ', 'แฏฌ', 'โญ', 'โ', 'โฌ', 'แญป', 'ยป', 'ใ', 'ใ', 'โฅ', 'โ', 'โ', 'โ', 'โ', 'โ', 'โช'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 
'menbalas', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': ' ๐ ๐๐๐ก',
'game': ' ๐๐๐ ๐',
'rpg': ' ๐ฅ๐ฃ๐ ๐๐๐ ๐๐ฆ',
'xp': ' ๐๐ซ๐ฃ & ๐๐๐ ๐๐ง',
'sticker': ' ๐ฆ๐ง๐๐๐๐๐ฅ',
'kerang': ' ๐๐๐ฅ๐๐ก๐ ๐๐๐๐๐',
'quotes': ' ๐ค๐จ๐ข๐ง๐๐ฆ',
'fun': ' ๐๐จ๐ก',
'anime': ' ๐๐ก๐๐ ๐',
'admin': ' ๐๐๐ ๐๐ก',
'group': ' ๐๐ฅ๐ข๐จ๐ฃ',
'vote': ' ๐ฉ๐ข๐ง๐๐ก๐',
'absen': ' ๐๐๐ฆ๐๐ก',
'premium': ' ๐ฃ๐ฅ๐๐ ๐๐จ๐ ',
'anonymous': ' ๐๐ก๐ข๐ก๐ฌ๐ ๐ข๐จ๐ฆ ๐๐๐๐ง',
'internet': ' ๐๐ก๐ง๐๐ฅ๐ก๐๐ง',
'downloader': ' ๐๐ข๐ช๐ก๐๐ข๐๐๐๐ฅ',
'tools': ' ๐ง๐ข๐ข๐๐ฆ',
'nulis': ' ๐ ๐๐๐๐ฅ ๐ก๐จ๐๐๐ฆ',
'audio': ' ๐๐จ๐๐๐ข',
'maker': ' ๐๐ข๐๐ข ๐ ๐๐๐๐ฅ',
'berita': ' ๐๐๐ฅ๐๐ง๐',
'database': ' ๐๐๐ง๐๐๐๐ฆ๐',
'quran': ' ๐๐-๐ค๐จ๐ฅ\'๐๐ก',
'owner': ' ๐ข๐ช๐ก๐๐ฅ',
'info': ' ๐๐ก๐๐ข',
'': ' ๐ก๐ข ๐๐๐ง๐๐๐ข๐ฅ๐ฌ',
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'anonymous') tags = {
'anonymous': 'Anonymous Chat'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
'maker': 'Maker'
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'nocategory') tags = {
'': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `${htka} ๐๐๐๐ ${htki}`,
rows: [
{title: `${emot} GROUP BOT`, rowId: ".gcwann", description: "Group San Xd Official"},
{title: `${emot} OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
{title: `${emot} SCRIPT BOT`, rowId: ".sc", description: `Source Code`},
{title: `${emot} SEWA BOT`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
{title: `${emot} BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
{title: `${emot} DONASI`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
{title: `${emot} S & K San Exde`, rowId: ".rules", description: 'Syarat dan ketentuan BOT'},
]
},{
title: `${htka} ๐๐๐๐ ${htki}`,
rows: [
{title: `${emot} Menfess`, rowId: ".? menbalas", description: "Menampilkan Semua command menfess"},
{title: `${emot} Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
{title: `${emot} Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
{title: `${emot} Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
{title: `${emot} Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
{title: `${emot} Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
{title: `${emot} Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
{title: `${emot} Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
{title: `${emot} Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
{title: `${emot} Premium`, rowId: ".? premium", description: "Only premium Users"},
{title: `${emot} Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
{title: `${emot} Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
{title: `${emot} Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
{title: `${emot} Berita`, rowId: ".? berita", description: "Cari berita terupdate"},
{title: `${emot} Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
{title: `${emot} Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
{title: `${emot} Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
{title: `${emot} Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
{title: `${emot} Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
{title: `${emot} Group`, rowId: ".? group", description: "Only Groups"},
{title: `${emot} Admin`, rowId: ".? admin", description: "Only Admin Group"},
{title: `${emot} Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
{title: `${emot} Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
{title: `${emot} Info`, rowId: ".? info", description: "Info info BOT"},
{title: `${emot} Owner`, rowId: ".? owner", description: "Owner Only!"},
{title: `\n${emot} No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
] },
]
let psan = 'bagaimana kabarmu?'
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tek = `
*${ucapan()} @${m.sender.split`@`[0]}*

  ใ San Official ใ

โญโโใย ย INFO USERย ใโโฌฃ 
โ โฌก Name:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
โ โฌก *Tags:* @${m.sender.split`@`[0]}
โ โฌก *Status:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
โ โฌก *Premium:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
โโโใย ย INFO BOTย ใโโโโฌฃ 
โ โฌก *Bot Name:* ${namebot}
โ โฌก *Type:* Node.Js
โ โฌก *Baileys:* Multi device
โ โฌก *Uptime:* ${mpt}
โ โฌก *Time:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
โ โฌก *Users:* ${Object.keys(global.db.data.users).length}
โ โฌก *Limit:* ${usrs.limit}
โ โฌก *Level:* ${usrs.level}
โ โฌก *Role:* ${usrs.role}${usrs.premiumTime > 1 ? `
โฐโโโโโโโโโโโโโโฌฃ
`
const listMessage = {
text: tek,
footer: `๐ฎ *Note:* _Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner dengan cara ketik .report banh tik tok audio error_\n\n${wm2}\n\n${botdate}`,
mentions: await conn.parseMention(tek),
buttonText: `CLICK HERE`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '๐ง ๐ ๐  ๐ : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `โฎMenu โธ`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[โ] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ฯ^', 

    orderTitle: `โฎMenu โธ`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    conn.reply(m.chat, 'ใโฐsanโฐโฐโฐxdโฐโฑโฑใLoading...', ftrol) 

//------------------< MENU >----------------

//------------------ SIMPLE
/*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `${htjava} ${namebot}`,
body: titlebot,
description: titlebot,
mediaType: 2,
thumbnail: await(await fetch(thumb2)).buffer(),
 mediaUrl: sig
}
 }*/
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`

//------------------ DOCUMENT
    const _0x187932=_0x5c09;function _0x5c09(_0x28b840,_0x244043){const _0x1766bb=_0x1766();return _0x5c09=function(_0x5c09dc,_0x158321){_0x5c09dc=_0x5c09dc-0x1bb;let _0x4031df=_0x1766bb[_0x5c09dc];return _0x4031df;},_0x5c09(_0x28b840,_0x244043);}(function(_0x1c9e83,_0x2eef01){const _0x5e85ab=_0x5c09,_0x179660=_0x1c9e83();while(!![]){try{const _0x4c7814=-parseInt(_0x5e85ab(0x1d0))/0x1*(-parseInt(_0x5e85ab(0x1bd))/0x2)+parseInt(_0x5e85ab(0x1c4))/0x3*(parseInt(_0x5e85ab(0x1bf))/0x4)+parseInt(_0x5e85ab(0x1cc))/0x5*(-parseInt(_0x5e85ab(0x1d1))/0x6)+parseInt(_0x5e85ab(0x1c1))/0x7*(parseInt(_0x5e85ab(0x1bc))/0x8)+parseInt(_0x5e85ab(0x1cd))/0x9*(-parseInt(_0x5e85ab(0x1c7))/0xa)+parseInt(_0x5e85ab(0x1cb))/0xb*(-parseInt(_0x5e85ab(0x1be))/0xc)+parseInt(_0x5e85ab(0x1ce))/0xd;if(_0x4c7814===_0x2eef01)break;else _0x179660['push'](_0x179660['shift']());}catch(_0x2b3360){_0x179660['push'](_0x179660['shift']());}}}(_0x1766,0x70ad5));let buttonMessage={'document':{'url':sgc},'mimetype':td,'fileName':global['wm'],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':!![],'externalAdReply':{'mediaUrl':global[_0x187932(0x1c8)],'mediaType':0x2,'previewType':_0x187932(0x1c9),'title':global['titlebot'],'body':global['titlebot'],'thumbnail':await(await fetch(thumb))[_0x187932(0x1ca)](),'sourceUrl':sgc}},'caption':text,'footer':botdate,'buttons':[{'buttonId':'.gcwann','buttonText':{'displayText':_0x187932(0x1bb)},'type':0x1},{'buttonId':_0x187932(0x1c5),'buttonText':{'displayText':_0x187932(0x1c0)},'type':0x1},{'buttonId':'.rules','buttonText':{'displayText':'S & K '},'type':0x1}],'headerType':0x6};await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)],buttonMessage,{'quoted':m,'mentionedJid':[m[_0x187932(0x1c3)]]});function _0x1766(){const _0x1c60e8=['3ezQcUH','.owner','.rules','725770ccnUBU','sig','pdf','buffer','305624SHQwwY','233195fjGJSZ','72BjUaMS','2869867kBKaey','chat','6NokiEm','72PsFaxu','GROUP OFFICIAL','1832yREmVQ','205026IsvCrH','132IBvmfp','3329164htczQJ','OWNER','7315FCLnNH','sendMessage','sender'];_0x1766=function(){return _0x1c60e8;};return _0x1766();}
    
//-------DOC TEMPLATE
   /* const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '๐ง ๐ ๐  ๐ : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\nโก Supported By Fangz TEAM',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://s.id/Fangzganz'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: '.donasi'
                    }
                },
            ]
        }
        await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })*/
//------------------- BUTTON VID
/*conn.sendButton(m.chat, text, wm, 'https://youtu.be/3ONnszQtwz0', [['Ping', '.speed'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})*/

} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(tesm|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years ๐๏ธ*\n',mo, ' *Month ๐*\n', d, ' *Days โ๏ธ*\n', h, ' *Hours ๐*\n', m, ' *Minute โฐ*\n', s, ' *Second โฑ๏ธ*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? ๐ฅฑ"
if (time >= 4) {
res = "Selamat Pagi"
}
if (time >= 10) {
res = "Selamat Siang๏ธ"
}
if (time >= 15) {
res = "Selamat Sore"
}
if (time >= 18) {
res = " Selamat Malam"
}
return res
}

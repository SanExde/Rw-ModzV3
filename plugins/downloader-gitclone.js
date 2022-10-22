import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, {conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `Example user ${usedPrefix}${command} WIBU|WIBUbot-md`
    let [usr, rep] = text.split`/`
    let url = `https://api.github.com/repos/${encodeURIComponent(usr)}/${encodeURIComponent(rep)}/zipball`
    let name = `${encodeURIComponent(rep)}.zip`
    m.reply(`Downloading. . .`)
    conn.sendFile(m.chat, url, name, null, m)
}
handler.help = ['gitclone <username>/<repo>']
handler.tags = ['downloader']
handler.command = /gitclone/i

handler.limit = true

export default handler

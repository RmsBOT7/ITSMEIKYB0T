let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @AbbasXD
║
╠═〘 DONASI 〙 ═
╠➥ Ovo: 082112833021
╠➥ Tsel: 085716066975
╠➥ Gopay : 082112833021
║
║>Request? Wa.me/6285716066975
║
╠═〘 ABBAS XD BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


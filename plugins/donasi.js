let handler = async (m) => {
	m.reply(`
*── 「 DONATE 」 ──*

Hi 👋
මෙම බොට් එක යාවත්කාලීනව තබා ගැනීමට ඔබට මට සහාය විය හැක:
┌〔 Donasi • Emoney 〕
├🏧 0767043432 (OVO/Dana/GoPay)
├📍 https://saweria.co/ilmanhdyt
└────
ඔබේ පරිත්‍යාගයේ ඕනෑම ප්‍රමාණයක් බොහෝ දේ අදහස් කරයි👍

නැටහොත්!

පුද්ගලයා අයිතිකරු අමතන්න:
wa.me/94767043432 (Owner)`)
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler

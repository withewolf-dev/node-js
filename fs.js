const fs =require('fs')
const song =fs.readFileSync('song.txt','utf8')
console.log(song)


//fs writefilesync
const fs =require('fs')
const song = "i skip a beat when i see her on the play ground"
fs.writeFileSync('song.txt',song)
const readthis =fs.readFileSync('song.txt','utf8')
console.log(readthis)

fs.mkdirSync() // to make new directory
fs.rmdirSync()// to remove  directory
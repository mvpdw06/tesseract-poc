const exec = require('./exec')
const { resolvePath } = require('./path')

const image = resolvePath('./examples/test2.png')

exec(`tesseract ${image} - --dpi 300`, console.log)

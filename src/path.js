const path = require('path')
const rootPath = path.join(__dirname, '../')

module.exports = {
  resolvePath: (filePath) => path.join(rootPath, filePath),
}

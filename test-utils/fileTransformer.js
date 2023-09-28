const path = require('path');

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = 'file-${path.basename(sourcePath)}';`
    };
  }
};

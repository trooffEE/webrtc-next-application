const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = filenames =>
  `prettier --ignore-unknown --write ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand]
}

const path = require('path');


const PACKAGE_PATH = './package.json';
const PACKAGE_FULL_PATH = path.join(process.cwd(), PACKAGE_PATH);

module.exports {
    PACKAGE_PATH,
        PACKAGE_FULL_PATH
}


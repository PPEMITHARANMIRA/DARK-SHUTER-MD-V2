const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=SFViRQgb#uXUguvOtw5-9laxUIEHJbA7v8XxNHnRhPmwGQ_ZC1wY',
GITHUB_AUTH_TOKEN: '8KFpEu5Cxe10331ljtC2ZSjl6MhdDs14jsU4',
GITHUB_USER_NAME: 'PPEMITHARANMIRA',

};

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=SFViRQgb#uXUguvOtw5-9laxUIEHJbA7v8XxNHnRhPmwGQ_ZC1wY',
GITHUB_AUTH_TOKEN: '11AXQUAHQ02aLs9zjujC8n_EgYQXCcVFWUQQviphlRSHPq6hFEVYQyw1a0fQPYwrTlRULM7YKKTvygx5M1', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'PPEMITHARANMIRA',

};

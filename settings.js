const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'X - B Y T E';
const FOOTERNAME = 'Powered by Hamza';
global.owner = process.env.OWNER_NUMBER  || '923072380380' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFBcmg1SzVxVit6Yko5SHZidzdXaVdJTkQzZy9XVVFGZk1nT0I3TWQxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE9ZWTEvOXd2K2lUaS9lMWZXRkl2MS9XQlJKNG16eHRxNnBqZ2U2SEpGZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RmdjZklVSHJ4clBlc1R5WDJ0c0Q0WDVzSm1ESEQwcGYwL3V0L3U0YkdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZa3FnbzJ1WHRNam0rUVJna1RRL2hjSkIrOGI3Tzd6ejVkZzR5czNFeDBVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LRzdmRVZTVFVkZjVLWkUxcEkzcVZpa0dWVG03VU9WMkNHc2xIQms3bWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5ycG02dzNqNFVYb3pLY3cyY2t4Q0I3dituVVNHaklpUnJINWRHaXg0Qmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dPUWxaMXlka3R4NE5lSTlubWpnTXlQOHNhQ01TcFRaS29BNVh3cXZXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialFxeWJmcGJ0K2RtWXZRcC8zUHJWWHdQWWRpUDh4VWpLT1lJYW1QVXZRbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdLaGNBV1IrSmV0NnNKbkt6Z2Q5d3VVNzhNUlJiamRxbFdJeWY1VldZVGs2YlI2SklKTlBHelF0SW43SUM1dFNScCtoWDRHeFpsQ3ZyL2NZVEpqdEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJvM3lkL0U3eDJmbWJPVUNjUFY0RVozL0pOUlZWeWQ2d3pWZk5VY2lyUWNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnYURvOWR1SFE4SzRaT0M1b0kyZmpRIiwicGhvbmVJZCI6ImFmYWU5ZWI2LWNhY2ItNDk1Zi1hZGZhLWVjMmJlODkxNTQwNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzY2NQV3JPNjd5cWNVSkNtL0Rsc2hOa25RU0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BZdlI4V0ltWVVrUkxSVGN4cU5IRHZ0SnhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc4NVFBU01MIiwibWUiOnsiaWQiOiI5MjMwNzIzODAzODA6ODRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44WkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOR0E5SXdHRU1INDhyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxYlpSOVhybDlsUnBmb0ZaWTJHdWlCRDFLak9pUnN2ejVBSTVxalM0bW5NPSIsImFjY291bnRTaWduYXR1cmUiOiJ4OHgxVnkxUnFINnllYkVhU0x0MXVNajMwWFF3N1VwN3lhTzhBVjNXN2ZFK2VKcFJKRUd5c1F3Nys5T0xBYUZQaGMvWlpoTVM2MkpKNUVqNDQ4SEVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGNRMFdPN2ZubU5RSHJCb3ZTazdCT0RVbGhuMTl2RVNHRy9WTjZOYm15UVM4b0g5VmFGOGhnOUhZVm5xZ2hGVGJNL3U4cm1EMkVJSUdPTUo1V21tQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzIzODAzODA6ODRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYW0yVWZWNjVmWlVhWDZCV1dOaHJvZ1E5U296b2tiTDgrUUNPYW8wdUpweiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTU0Nzg1NX0=' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'Hamza' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '*Powered by Hamza*',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || false  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};

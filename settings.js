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
SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0txakhURDF5aE9vSGtYT3VibEJzeU1zMWxWVFFBemhVR1NvTkx0cWYyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxJRnJZTWp6WFl1TDR4UmZtK0J5S3RBQkNuaVRoeFBXVVRmM08wbGlYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SnNrWkl2ZW5oL1Ruck5XZTJWV0dQNEtzM0ZSTzJoMWp4aDNURlVINVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKZVhHVU9JWGhQaFRFaFppT3lJbmc0RFhFNG9nVlh5bHpQNERnaVU4TlhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOLy9CY2V4M1R5eXlrakdLVjVheWYvZXIxVTltL25TcW0xMmZtZGluVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIK0c2MklkTzluOUM2dExiTmh5WWNuWWJYaHVNd2RURzQ5cWs1TU9ESEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NYK3g2ajF5clFSMVZaZzNKWHc2MVAvdkZVKzVqWlZ0WlF5TnVEbU5XYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDlUeXBTK09RU0dqamRTcW1NbEhjRG9WQnFLQVArdlZDVUZGSE1SMUZTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY5WG9iVG1ZOXV1cjR6Yk1PTzRJTVdBaUlDZnVHRXZ4elovMWFjMSsxdmlMVmJhNWZkT2REVUtXVFF2YWxSVWlPbWVVRjBwSUJoYUJLMHE0ZW5RUUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJjSUdQb3RCN3VDMXkrWGxYZkpEKzlZVkNjMEllaFVpZEFBQWZ6Nmt5aERvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxS2dSc3JBN1FyNlRpajRZTkdRUEFRIiwicGhvbmVJZCI6IjgzN2ZhZTQ2LTlmMzMtNGM1MC1hMzE4LTY3YTI2ZjMxNzU3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKUUVsNnFkOVM1RmlITmpld1lBVVhxTmNBSlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVCakRwdmFmdTVlRi90V1pBdlBmbFVxWjdNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhTVkNDQjcyIiwibWUiOnsiaWQiOiI5MjMwNzIzODAzODA6NzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiOm8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rQTlJd0dFTFhHMUxRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFiWlI5WHJsOWxScGZvRlpZMkd1aUJEMUtqT2lSc3Z6NUFJNXFqUzRtbk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRpUUZxR0dBZ1RDWW1GMXRXVi9LVy9HWVVRVWlkZDV3VjF2UjFyRlc4ak9PRGk5U3BaMTZWMndOc0kyQkFjQWd3NDcrYkRsZnZ2cDBvdjZwWlNydkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3QUJFY3pZRC9zT2JOZFBUWis3WGMreURqNHAzQUVoWDFrSFYvL1dHdFVJdXdoZjJseHFUdkUxM2tNSk5vUloxSFQzUDY3SlJnNjNTYTdZdStSWkxBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA3MjM4MDM4MDo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbTJVZlY2NWZaVWFYNkJXV05ocm9nUTlTb3pva2JMOCtRQ09hbzB1SnB6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMDQ5OTIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUs3TyJ9' ,
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
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
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

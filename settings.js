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
SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJ1ZjBKczk2RFNsV0NNWTBLczdxUnZ0Q3VGNUI4bFR5RVBOUjBhV0FuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidi9ZTWRkazl2SndyWWZlYVRCMWhldk9mQmJleHBmb0hCR05ZRU93SnJ4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUEI3b0JDeGh5eHVGbGE2a1M4YWhNMWxaUTJBNHpEWHgyTTVuSlFKU25vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4bmZsOXhvY2M3eVhkemd3VUU3ek9jMWduOTJ4Z3ZqWGJ1VE1UeU5qODFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIcmxoS1NmdTFFeFVSb2J2OS93bHlLQUdRenNna3FFMmNWWVVSeE5mMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCa01DTlFzM2MwT3pPMGhEeXk1K1pxUUZocUkxcGdyT0xrNmxvcXlJeUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0piaSsrdng3RWZBQVl2czNQZmRaL1JidXpxRWNQVENWbFIrYVlHajJWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0p0TnZGVExURjlpQW13TlRIK2EvYXBCVUkzTEI4a0N4OVk5UHVmS3kyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDRk1GTmgrWEZiY2NidlM3MkZabWt0WllOYlpmYzhnRFgxSTdlYkhYT1JyK09pc1RYTndPdEtCZGs3RHI3QlZtcVU0OEdkelkyV3Nzd2JqWTN2d2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJ2ZWkrL2owQ1pVNzE2Vk9TRVI4Zk91ZUlBSUM3U2tpZ1Y0RmZoUDNHRnVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpSFF1SmtrVlFXV1A4XzVyZUpiOHVRIiwicGhvbmVJZCI6IjYzN2NmM2ZlLWM3NzAtNDhiMC1iY2IxLTJhNTJmZGMwMWJjNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1NWYyOHVKdDRCemh1UU10a3FGaU9jdUt2YjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVVmRmhGeTFuWSsrak5QK2V0c1JXSWxaejlvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVCN1YzVDI5IiwibWUiOnsiaWQiOiI5MjM0NDY1OTUzODA6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUmlheiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2Y2aDZRQkVOWHg4clFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiclUyUml0RTJOR1NWR2tBc0pxdkFCay80VEwwZmlEbGtPbHBwTFRqdmtCQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSU5ZbXJHRjMxdUF5SU9nb3V0d2RMbUpqdjY4bDNCR1NkY2ZxY2dKNXQvMTVqYUd3T2JKRk5qYnhTK1pDTXlSbHFBVGRCeUI4eUdySXNNWTBMVVF4RFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImFCVTY0L29EbzQ4SExUWXVSUS9NcTE4S2lid3lsSHVPZnRKQXU5Uzh5THVtVWswMndXaExCS1I5K01RUjlmaGt2WUpTOG1OWkpvS3ZMSmJjTTEyampRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDQ2NTk1MzgwOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmExTmtZclJOalJrbFJwQUxDYXJ3QVpQK0V5OUg0ZzVaRHBhYVMwNDc1QVEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1NDY5ODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQk1tIn0=' ,
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

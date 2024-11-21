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
SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZwTVFlVXc0ZnFsMEtCRGtqNnhiWXhWTW1BN1Z3STFpQ1ZPaFpwcUExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2JpK3R3U1NCUVBrSlVDclQ2bythWGdHTTRhSW9SZW9tWmNWQzBrWWhGST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T1JrSVNTV240LzlFSUhXTlhTWkdMUWFONGEzZVZ5b0Ftc0Ixcy9DbmtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaMlh5YjNDT1I0Ky9mRkVsWEZKZmpkczkyWlo1QkRmaUdUUDFkUTlUUkJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIK1RRY2lEa1ZVTU9sc1h3U0tmcU5wQm5vV1l4VGVpc1lNUzQwcytHRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BWlg5am9waWl0VjJvZi9GbkJYRnllMEtkSUFtUDRUY3V0TnBOZGkrV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JzNGxheFdnVzVxdnhWTC9wc2EvVXl2ZXN3WElGYStLczFZT2FldDYyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZThuSnNHMTdnYmFLVXlHTWVweks3S0NpNU9sRlRUZysyVElQSTZLeG8wST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJT1lWeUhQbVdtUU0xUFdIcnhsK1IxVHZRcDZvNXhscnVhak5ab2ljR3N0VkZrUWFQemFSZ2RyNnpZWkxURjE3L1E1cCt1WlJncDVRMGdaQ29BNWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6InpCeGpSTkpZcTVYdkplY0l2UEJkaU9JMmdhRUtGZ0RBY3FYcHcwUTBRUm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikx3LTh1M0xoVGRtQzdDeENzemZiQ2ciLCJwaG9uZUlkIjoiOWFlNzZmNDAtYWRkMS00ODUxLTg0OWYtNzM2NDRlOTk3MTUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdmdmFudjdZWlRtUjJCYitOYmNVdVBXWWFxZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbTI0U25tV1A2aWZVUFl5OFBlVk1uTHpEQnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFdSNUxUSDMiLCJtZSI6eyJpZCI6IjkyMzQ0NjU5NTM4MDoyM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2Y2aDZRQkVMakc4N1FHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiclUyUml0RTJOR1NWR2tBc0pxdkFCay80VEwwZmlEbGtPbHBwTFRqdmtCQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTHVqWTZFeEdqS2FjMXYrT2Z6UzNFOWtjRDdiUEZQSjBVTElNSzJURzIwR2lCNzhJRHYreXBDRlN5Rkc2YUZJeWlRTU9NMGFKVjhmNmtZWHBTTCtGRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjkxRVd4M2IxSVlpRTd5bytOK2VGMzJ4STB3K2ZzZlRiVGFDK0YwdmZsVlpVSVluWlpjT2Zzbno0ZWw1YmJ0Y1ZSTVRjazhkM0ZRYkhBZDFET1E0bWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDQ2NTk1MzgwOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmExTmtZclJOalJrbFJwQUxDYXJ3QVpQK0V5OUg0ZzVaRHBhYVMwNDc1QVEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1NTc4MzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQk1uIn0=' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'Hamza' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'text' ,
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '*Powered by Hamza*',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'URDU' ,
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

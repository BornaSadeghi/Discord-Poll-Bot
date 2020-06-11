const discord = require("discord.js");
const fs = require("fs");
const {token, prefix} = require("./config.json");

const bot = new discord.Client();
bot.commands = discord.Collection();

const commandFiles = fs.readdirSync()

for (const file of commandFiles){
    const command = require(`./commands/${file}`)
}

function embed () {
    return new discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
}

bot.on("ready", () => {
    console.log("Poll Bot online.");
});

bot.on("message", (message) => {
    if (message.author.bot) return;
    message.channel.send("hey");
});

bot.on("messageReactionAdd", (reaction, user) => {
    console.log(reaction, user);
})

bot.login(token);
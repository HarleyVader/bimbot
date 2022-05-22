// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const dotenv = require('dotenv');
const { bimbot, rule34 } = require('./forms.json');

dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    } else if (commandName === 'forms') {
        await interaction.reply('${ bimbot }');
    }
});


// Login to Discord with your client's token
client.login(token);

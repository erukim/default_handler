const { Client, Collection } = require('discord.js')
const client = new Client({ intents: 32767, partials: ["CHANNEL"] })
module.exports = client;client.setup = new Collection();
["setup"].filter(Boolean).forEach(h => { require(`./src/handlers/${h}`)(client); })
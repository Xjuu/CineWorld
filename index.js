const Discord = require("discord.js");
require("dotenv").config()



const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged In As ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hello"){
        message.reply("Hello Im Online!")
    }
})
client.login(process.env.TOKEN);
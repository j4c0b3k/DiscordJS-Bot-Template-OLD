const category = require('../storage/categories.json');

module.exports = {
    // CMD INFORMATION
    name: 'ping',
    aliases: ["ping"],
    description: "Shows the bot's ping.",
    category: category[1],

    // THE ACTUAL CODE
    execute(client, message, args) {
        let msgping1 = new Date();
        let botping = new Date() - message.createdAt;
        let msgping2 = new Date() - msgping1;

        message.channel.send(`Calculating!`).then(msg => {
            msg.edit(`❤️ ${Math.round(botping)}ms\n⌚️ ~${Math.round(msgping2)}ms`)
        })

    },
};

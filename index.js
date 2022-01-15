// Require the necessary discord.js classes
var dotenv = require('dotenv')
dotenv.config()

const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN).then(async () => {
  const cnID = "907645079399854131"
  const channel = await client.channels.fetch(cnID)

  var CronJob = require('cron').CronJob;
  var job = new CronJob(
    '*/5 * * * * *',
    async () => {
      try {
        await channel.send("Test")
      } catch (error) {
        
      } 
      console.log('You will see this message every second');
    },
    null,
    true,
    'Asia/Saigon'
  );

  job.start()
});
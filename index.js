// Require the necessary discord.js classes
var dotenv = require('dotenv')
dotenv.config()

const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

// client.commands = new Collection();

// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`);
//   // Set a new item in the Collection
//   // With the key as the command name and the value as the exported module
//   client.commands.set(command.data.name, command);
// }

// client.on('interactionCreate', async interaction => {
//   if (!interaction.isCommand()) return;

//   const command = client.commands.get(interaction.commandName);

//   if (!command) return;

//   try {
//     await command.execute(interaction);
//   } catch (error) {
//     console.error(error);
//     await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
//   }
// });

// Login to Discord with your client's token
client.login(process.env.TOKEN).then(async () => {
  var CronJob = require('cron').CronJob;

  //channel settings
  const cnID = "932088122446069781" //channel notification
  const channel = await client.channels.fetch(cnID)

  //cron settings
  const timezone = 'Asia/Saigon'
  const cronWB_1 = "55 10,14 * * *"
  const cronWB_2 = "25 22 * * *"
  const cronBandit = "55 11,17 * * *"
  const cronBanquet = "25 19 * * *"
  const cronCrystal = "25 16 * * *"
  const cronFuzzy = "55 15 * * 6,7"

  //notify
  const everyoneTag = "@everyone"
  const notifyWB = "rampage!"
  const notifyBandit = "bandit!"
  const notifyBanquet = "banquet!"
  const notifyCrystal = "crystal!"
  const notifyFuzzy = "fuzzy!"

  //set Job
  var jobWB_1 = new CronJob(
    cronWB_1,
    async () => {
      try {
        await channel.send(everyoneTag.concat(" ", notifyWB))
      } catch (error) {
        console.log(error);
      }
    },
    null, true, timezone
  );

  var jobWB_2 = new CronJob(
    cronWB_2,
    async () => {
      try {
        await channel.send(everyoneTag.concat(" ", notifyWB))
      } catch (error) {
        console.log(error);
      }
    },
    null, true, timezone
  );

  var jobBandit = new CronJob(
    cronBandit,
    async () => {
      try {
        await channel.send(everyoneTag.concat(" ", notifyBandit))
      } catch (error) {
        console.log(error);
      }
    },
    null, true, timezone
  );

  var jobBanquet = new CronJob(
    cronBanquet,
    async () => {
      try {
        await channel.send(everyoneTag.concat(" ", notifyBanquet))
      } catch (error) {
        console.log(error);
      }
    },
    null, true, timezone
  );

  var jobCrystal = new CronJob(
    cronCrystal,
    async () => {
      try {
        await channel.send(everyoneTag.concat(" ", notifyCrystal))
      } catch (error) {
        console.log(error);
      }
    },
    null, true, timezone
  );

  var jobFuzzy = new CronJob(
    cronFuzzy,
    async () => {
      try {
        await channel.send(everyoneTag.concat(" ", notifyFuzzy))
      } catch (error) {
        console.log(error);
      }
    },
    null, true, timezone
  );

  jobWB_1.start()
  jobWB_2.start()
  jobBandit.start()
  jobBanquet.start()
  jobCrystal.start()
  jobFuzzy.start()
});


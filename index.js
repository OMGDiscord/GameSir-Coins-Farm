const { Client } = require('discord.js-selfbot-v13');

// Predefined messages for random selection
const messages = [
  'I got coin!',
'Does anyone want 1000 coins for 10 USD?',
'I am getting coins...',
'Anyone want to trade coins?',
'I just mined 500 coins!',
'Getting some good coins here!',
'Who wants to buy coins?',
'Selling coins, anyone interested?',
'Just got some fresh coins!',
'Trading coins for cash!',
'I have 1000 coins, who wants them?',
'Coins are coming in fast!',
'Does anyone need coins?',
'I’m stacking up on coins!',
'How much for 500 coins?',
'I’m so rich in coins now!',
'Coins for sale, hit me up!',
'Anyone want to buy 1000 coins?',
'I’m rich in coins, anyone want some?',
'Buying coins with real USD!',
'Got more coins, need more trades!',
'Coins, coins everywhere!',
'Does anyone want to trade for coins?',
'Anyone selling coins?',
'Looking for coin trades!',
'Coin farming is going well!',
'More coins, more trades!',
'I’m a coin collector now!',
'Coins for 10 USD, anyone interested?',
'Got some premium coins available!',
'I’m just getting started with coins!',
'Farming coins for a living!',
'Got the coin fever!',
'Anyone wanna swap coins for cash?',
'Coins coming in hot!',
'Made some serious coin today!',
'Got a ton of coins, who wants them?',
];

const client = new Client();

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    // Fetch the thread using its ID
    const thread = await client.channels.fetch('1360713095395282974');

    // Check if it's a valid thread channel
    if (!thread || typeof thread.send !== 'function') {
      console.log('Thread is not valid for sending messages.');
      return;
    }

    // Function to send a random message in the thread
    const sendRandomMessage = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      thread.send(randomMessage);
    };

    // Send a random message every 12 minutes (720000ms)
    setInterval(sendRandomMessage, 720000); // 720000ms = 12 minutes
  } catch (err) {
    console.error('Error fetching thread:', err);
  }
});

client.login('PUT your token'); // ⚠️ not bot token
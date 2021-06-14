const config = {
    status: "{{token_number}} status",
    room: "819290918392692788",
  }
  
  /**
   * if you want to add more tokens just add this line  - :) 
    "token",
   */
  const arr = [
    "token",
    "token1",
    "token2",
    "token3",
    "token4",
    "token5"
  ]

  arr.forEach(token => {
    const dis = require("discord.js-self");
    const bot = new dis.Client()
    bot.on("ready", async () => {
      console.log(`${bot.user.tag} logged in.`)
      const c = await bot.user.setPresence({ activity: { name: config.status }, status: 'idle' }).then(c => `${bot.user.tag} status is good`).catch(er => `${bot.user.tag} status not good`)
      console.log(c)
      if(!config.room) return; 
        const room = bot.channels.cache.get(config.room)
        const access = await room.join().catch(err => null);
        if (!access) {
          return console.log(`${bot.user.tag} cant join the room`)
        }
        console.log(`${bot.user.tag} joined the room`)
      
    });
    bot.login(token).catch(() => console.log(`${token} not logged in.`))
  })
  
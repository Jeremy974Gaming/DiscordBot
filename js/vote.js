exports.run = (client, message, args) => {
        if(command === "vote") {
              // Remove The Command
              message.delete()

              // Permissions
              if(!message.member.roles.some(r=>["Admins", "Mods", "Managers"].includes(r.name)) )
                return message.reply("Sorry, you don't have permissions to use this command right now!")
                const vote = args.join(" ")
                if(!vote)
                  return message.reply("Please include more details.")
                // Bot Posts Announcement
                const embed = new Discord.RichEmbed()

                // Main Section Of The Announcement Command
                  .setColor(0xff0000)
                  .setDescription(`Posted By: ${message.author.tag}`)
                  .addField(`__**${message.guild.name} Voting**__`, vote)
                  .addField("Please Vote With The Following...", "YES = :white_check_mark:\rNO =  :negative_squared_cross_mark:")
                  .setFooter("© CSX Bot Created By William Robinson#0974 << Add my creator for questions and suggestions.")
                  const announcementChannel = message.channels.find("name", "voting")
                announcementChannel.send("@everyone", {embed}).then(message => {
    message.react("✅")
    message.react("❎")
          }            )
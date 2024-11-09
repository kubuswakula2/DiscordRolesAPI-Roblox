# DiscordRolesAPI-Roblox
Api służące do zwracania ról danego użytkownika z danego serwera 

Aby api działało na serwerze musisz dodać jakiegoś bota którego stworzysz na https://discord.com/developers/
Do pliku env wrzucasz token bota
A w pliku server.js ustawiasz id serwera z ktorego ma pobierać role uzytkownika (guild id)
Po konfiguracji instalujesz biblioteki wpisując w konsole **npm install axios dotenv express**
Serwer startujesz komendą **npm start**

Serwer startuje domyślnie na porcie 5000 więc adres api bedzie wygladal w ten sposob:
http://localhost:5000/getroles?discordid=ID-DISCORD&robloxid=ID-ROBLOX


API used to return the roles of a given user from a given server 

For the API to work on the server, you need to add a bot that you can create at https://discord.com/developers/
Put the bot token in the env file
And in the server.js file  set the server ID (guild id)
After configuration,  install the libraries by typing **npm install axios dotenv express** in the console
Start the server with the **npm start** command

The server starts on port 5000 by default, so the API address will look like this:
http://localhost:5000/getroles?discordid=ID-DISCORD&robloxid=ID-ROBLOX  

require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios')
const BOT_TOKEN = process.env.MTMxMDMzODI4NTMxMDMxMjQ5OQ.GQ2nMW.zVRN_gFalFojUVTfx-VK5eXH6ZItBltJIByJE8;
const guildid = "1310341866247422053" // id serwera na którym jest bot


const PORT = process.env.PORT || 5000;




app.get('/getroles', async (req, res) => {
    const discordid = req.query.discordid;
    const roblox_id = req.query.robloxid;

    if (roblox_id) {
        try {
            const memberResponse = await axios.get(`https://discord.com/api/v10/guilds/${guildid}/members/${discordid}`, {
                headers: {
                    'Authorization': `Bot ${BOT_TOKEN}`
                }
            });
            
            const memberData = memberResponse.data;
            const roleIds = memberData.roles; 

            

            if (roleIds) {
                res.status(200).send({ success: true, data: roleIds });
            } else {
                res.send({ success: false });
            }
        } catch (error) {
            console.error('Błąd przy pobieraniu ról:', error);
            res.status(500).send({ success: false, message: 'Failed to fetch roles' });
        }
    } else {
        res.status(400).send({ success: false, message: 'Missing roblox_id' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

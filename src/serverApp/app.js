const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.post("/api/postusers", express.json({ type: '*/*' }), function (req, res) {
    const newUser = req.body;
    // console.log(newUser);
    if (newUser) {
        readUsers().then(
            users => {
                usersList = users;
                const newId = (+usersList[usersList.length - 1].id + 1).toString();
                newUser.id = newId;
                usersList.push(newUser);
                fs.writeFile("users.json", JSON.stringify(users), (error, data) => {
                    // console.log("error|data", error, data);
                    res.status(200).json(usersList);
                });
            },
            error => {
                console.log(error);
                res.status(500).send({ error: error });
            }
        );
    } else {
        res.status(500).send({ error: 'Invalid data' });
    }
});

app.post("/api/postmessage", express.json({ type: '*/*' }), function (req, res) {
    const newMessage = req.body;
    console.log('LastMes: ', newMessage.messages[newMessage.messages.length - 1].messageId);
    if (newMessage) {
        readMessages().then(
            usersMessages => {
                messagesList = usersMessages;
                console.log("messagesList: ", messagesList.length);
                if (!newMessage.userId) {
                    newMessage.userId = (+messagesList[messagesList.length - 1].userId + 1).toString();
                    newMessage.messages[0].messageId = "1";
                    messagesList.push(newMessage);
                    console.log("newId: ", messagesList);
                    fs.writeFile("messages.json", JSON.stringify(usersMessages), (error, data) => {
                        // console.log("error|data", error, data);
                        return res.status(200).json(messagesList);
                    });
                } else {
                    for (key of messagesList) {
                        // console.log('key of usersMessages ', key.messages.length);
                        if (newMessage.userId === key.userId) {
                            const newId = (+key.messages[key.messages.length - 1].messageId + 1).toString();
                            // console.log('in if ', newMessage.messages[0].messageId, newId, key.messages);
                            newMessage.messages[0].messageId = newId;
                            key.messages.push(newMessage.messages[0]);
                            fs.writeFile("messages.json", JSON.stringify(usersMessages), (error, data) => {
                                // console.log("error|data", error, data);
                                return res.status(200).json(messagesList);
                            });
                        }
                    }
                }
            },
            error => {
                console.log(error);
                return res.status(500).send({ error: error });
            }
        );
    } else {
        return res.status(500).send({ error: 'Invalid data' });
    }
});

app.get("/api/users", function (req, res) {
    readUsers().then(
        emails => {
            console.log("async");
            emailsList = emails;
            res.status(200).send(emails);
            // console.log('Success! Read users:');
            // console.log('emails: ', emails);
        },
        error => {
            console.log(error);
            res.status(500).send({ error: error });
        }
    );
    console.log("sync");
});

function readUsers() {
    // console.log('Reading users...');
    return new Promise((resolve, reject) => {
        fs.readFile("users.json",
            function (error, data) {
                console.log(error);
                if (error) {
                    reject(error);
                } else {
                    if (data) {
                        // console.log('data: ', data);
                        resolve(JSON.parse(data));
                    } else {
                        resolve([]);
                    }
                }
            });
    });
}

function readMessages() {
    console.log('Reading messages...');
    return new Promise((resolve, reject) => {
        fs.readFile("messages.json",
            function (error, data) {
                console.log('error readMes: ', error);
                if (error) {
                    reject(error);
                } else {
                    if (data) {
                        console.log('readMes data: ', data);
                        resolve(JSON.parse(data));
                    } else {
                        resolve([]);
                    }
                }
            });
    });
}

app.listen(3000);
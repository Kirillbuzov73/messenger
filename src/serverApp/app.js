const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
// создаем парсер для данных в формате json
const jsonParser = express.json();

// app.post("/postusers", jsonParser, function (request, response) {
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     console.log("Body", request.body);
//     if (!request.body) return response.sendStatus(400);

//     response.json(request.body); // отправляем пришедший ответ обратно
// });

app.post("/api/postusers", express.json({ type: '*/*' }), function (req, res) {
    const newUser = req.body;
    console.log(newUser);
    if (newUser) {
        readUsers().then(
            users => {
                usersList = users;
                const newId = (+usersList[usersList.length - 1].id + 1).toString();
                newUser.id = newId;
                usersList.push(newUser);
                fs.writeFile("users.json", JSON.stringify(users), (error, data) => {
                    console.log("error|data", error, data);
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

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200
}
app.get("/api/users", function (req, res) {
    readUsers().then(
        emails => {
            console.log("async");
            emailsList = emails;
            res.status(200).send(emails);
            console.log('Success! Read users:');
            console.log('emails: ', emails);
        },
        error => {
            console.log(error);
            res.status(500).send({ error: error });
        }
    );
    console.log("sync");
});

function readUsers() {
    console.log('Reading users...');
    return new Promise((resolve, reject) => {
        fs.readFile("users.json",
            function (error, data) {
                console.log(error);
                if (error) {
                    reject(error);
                } else {
                    if (data) {
                        console.log('data: ', data);
                        resolve(JSON.parse(data));
                    } else {
                        resolve([]);
                    }
                }
            });
    });
}

app.listen(3000);
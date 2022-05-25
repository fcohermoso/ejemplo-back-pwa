const express = require('express');
const webPush = require('web-push');
const cors = require('cors');
const AppRouter = require('./routes/route')

const vapidKeys = {
    publicKey: "BK13YOZMMo1JGebOMuXceX3KluG2ptGTv_lFoyS7XUsz6iStukxLdskm5RqgHdpisGrk6vunWT2SsWFhcCrb8Q4",
    privateKey: "sZ9GjIAr8e01OGLPXv7CL4ANFH72GCpZm1onYrR1DdA"
};

const app = express();

webPush.setVapidDetails(
    'mailto:fcohermoso@gmail.com', 
    vapidKeys.publicKey, 
    vapidKeys.privateKey
);

app.use(cors());
app.use(express.json());

app.use(AppRouter);

app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});



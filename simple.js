const express = require("express");
const app = express();
const simpleGit = require('simple-git');

const git = simpleGit();

app.get("/", async(request, response) => {


  
await git.init()

//await git.addRemote('origin','https://github.com/umanoj9339/cc.git')

await git.add('.')

await git.commit("tryCatch2")
await git.push(['set-upstream'],'origin','main')
console.log("Done")
response.send("Hello World!");
});
app.listen(3006);
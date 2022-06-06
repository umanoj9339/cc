const express = require("express");
const app = express();
const simpleGit = require('simple-git');

const git = simpleGit();

app.get("/", async (request, response) => {

  response.send("Hello World!");
  let k = function(){
    "jjdklfd"
}
await git.init()

await git.addRemote('origin','https://github.com/umanoj9339/cc.git')

await git.add(['simple.js'])

await git.commit("tryCatch",k )
await git.push('origin','main')
console.log("Done")
});
app.listen(3006);






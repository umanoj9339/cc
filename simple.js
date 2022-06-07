const express = require("express");
const app = express();
const simpleGit = require('simple-git');

const git = simpleGit();

app.get("/", (request, response) => {

  response.send("Hello World!");
  let k = function(){
    "jjdklfd"
}
git.init()

git.addRemote('origin','https://github.com/umanoj9339/cc.git')

git.add()

git.commit("tryCatch",['LOL.txt','noM.tet','simple.js'] )
git.push(['-u'],'origin','main')
console.log("Done")
});
app.listen(3006);
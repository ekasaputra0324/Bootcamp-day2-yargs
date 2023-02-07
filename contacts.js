const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = (ask) => {
    return new Promise((resolve) => {
        rl.question(ask, function (answer) {
            resolve(answer);
        });
    });
}


const saveContact = (nama, email,nomerhp) => {
    
   

    fs.readFile('data/contact.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        json = JSON.parse(data);
        if (email == null) {
            json.push({
                nama: nama,
                nomer: nomerhp
            }); 
        }else{
            json.push({
                nama: nama,
                email: email,
                nomer: nomerhp
            });
        }
        let parse = JSON.stringify(json);
        fs.writeFile('data/contact.json', parse, 'utf8', (err) => {

            if (err) {
                console.log(err);
            }
        })
    })
}

module.exports = {questions, saveContact};

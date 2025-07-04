console.log(`---gioco invitati---`)

const invitedList = [`giorgio@rndm.com`,`maria@rndm.com`,`pippo@rndm.com`,`paperino@rndm.com`,`pietro@rndm.com`,`francesca@rndm.com`]
console.log(`${invitedList}`)

const userEmail = prompt(`Inserisci la tua email`)
let emailCheck = false

for(let i = 0; i < invitedList.length; i++){
  if(userEmail === invitedList[i]) {
    emailCheck = true
    console.log(`Presente tra gli invitati`)
  }
}

if(emailCheck === false) {
  console.log(`Non presente tra gli invitati`)
}

console.log(`---gioco dei dadi---`)

const userDice = Math.floor(Math.random() * 6) + 1;
console.log(userDice)

const cpuDice = Math.floor(Math.random() * 6) + 1;
console.log(cpuDice)

if(userDice > cpuDice) {
  console.log(`Hai vinto`)
}

if(userDice < cpuDice) {
  console.log(`Hai perso`)
}

const  yargs = require("yargs")
const data = require("./data.js")

yargs.command({
    command : "add",
    describe : "add a new human",
    builder : {
        id: {
            describe : "id",
            demandOption : true,
            type : "number"
        },
        firstname: {
            describe : "firstname",
            demandOption : true,
            type : "string"
        },
        lastname: {
            describe : "lastname",
            demandOption : true,
            type : "string"
        },
        age: {
            describe : "age",
            demandOption : true,
            type : "number"
        },
        city: {
            describe : "city",
            demandOption : true,
            type : "string"
        }
    },
    handler : (example) => {
        data.addhuman(example.id, example.firstname, example.lastname, example.age, example.city)
    }})

yargs.command({
    command : "remove",
    describe : "remove a human",
    builder : {
        id: {
            describe : "id",
            demandOption : true,
            type : "number"
        }
    },
    handler : (example) => {
        data.removehuman(example.id)    
    }
})
yargs.command({
    command : "removeall",
    describe : "remove all human",
    handler : () => {
        data.removeall()
    }    

})
yargs.command({
    command : "view", 
    describe : "view all human",
    handler : () => {
        data.viewinfo()        
    }
})
    
yargs.command({
    command : "viewhuman",
    describe : "view a human",
    builder : {
        id: {
            describe : "id",
            demandOption : true,
            type : "number"
        }
    },
    handler : (example) => {
        data.viewhuman(example.id)          
    }
})


















yargs.parse()


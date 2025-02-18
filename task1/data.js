const fs = require("fs")

const addhuman = (id ,firstname , lastname , age , city) => {
    const alldata = laodinfo()
    
    const duplicate = alldata.filter((data) => { 
        return data.id === id
    })
    if (duplicate.length == 0) {
        alldata.push({
            id : id,
            firstname : firstname,
            lastname : lastname,
            age : age,
            city : city
        })
        saveinfo(alldata)
        
    }
    else {
        console.log("id already exist")
    }
}
 
const removehuman = (id) => {
    const alldata = laodinfo()
    const removedata = alldata.filter((data) => {
        return data.id !== id
    })
    saveinfo(removedata)
}

const removeall = () => {
    const alldata = laodinfo()
    saveinfo([])
}


const viewinfo = () => { 
    const alldata = laodinfo()
    console.log(alldata)
}

const viewhuman = (id) => {
    const alldata = laodinfo()
    const human = alldata.filter((data) => {
        return data.id === id           
    })
    console.log(human)                  

    }


















    const laodinfo = () => {
        try {
            const data = fs.readFileSync("databody.json").toString()
            return JSON.parse(data)
        }
        catch  {
            return []
        }
    }


const saveinfo = (alldata) => {
    const saveinfojson = JSON.stringify(alldata)
    fs.writeFileSync("databody.json", saveinfojson)
}



module.exports = {
    addhuman : addhuman,
    removehuman : removehuman,
    removeall : removeall,
    viewinfo : viewinfo,
    viewhuman : viewhuman

}
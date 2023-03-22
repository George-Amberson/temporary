const express = require("express")
const { parse } = require('csv-parse');
const { createReadStream } = require('fs');
const fs =require('fs')
const app = express()
app.use(express.static('dist'))
const processFile = async () => {
    const records = [];
    const parser = fs
      .createReadStream('./titanic.csv', 'utf8')
      .pipe(
        parse({
            delimiter: ',',
            columns: true,
            trim: true,
        })
    )
    for await (const record of parser) {
      // Work with each record
      records.push(record);
    }
    return records;
  };

const main = async()=>{
    const result = await processFile()
    console.log(result)

    app.get("/", (req,res)=>{
        return res.sendFile('./dist/index.html')
    })
    app.get('/persons',(req, res)=>{
        return res.send(result)
    })
    app.listen(8070, ()=>{
        console.log("it is ok")
    })
}

main()



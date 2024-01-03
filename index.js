const express=require('express')
const cors=require('cors')
const configureDb=require('./config/database')
const routes=require('./config/routes')
const app=express()
const port=3001

app.use(express.json())
app.use(cors())
configureDb()
app.use(routes)

app.listen(port,()=>{
    console.log('server is connected',port)
})



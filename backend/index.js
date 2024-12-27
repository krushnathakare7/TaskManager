const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose')


const taskRoutes = require('./routes/tasks.route')

const app = express();


//to handle cross access reqest sharing 
app.use(cors());
//to parse request body into json
app.use(express.json());
app.use(express.urlencoded({extended: false}))
//connect to local db connect method needs 2 params 1.db uri and 2.options
//useNewUrlParser -->
//useUnifiedTopology -->

// if db not connection refuse to start then check if the mongodb service is running or not 
//brew services start mongodb-community@8.0  use stop to stop the service

app.get('/', (req,res)=>{
    res.json('Hello from server')
})

app.use('/tasks', taskRoutes)

mongoose.connect('mongodb://localhost:27017/todoApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Connected to DB..!!'))
.catch((e)=> console.error(e))

const PORT = 8082
app.listen(PORT, ()=>{
    console.log(`backend is running at port ${PORT}`)
})
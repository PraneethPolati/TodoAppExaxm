const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ToDoRoute = require('./routes/ToDoRoute');
const app = express();

const PORT = process.env.PORT || 5000;

const MONGO_URI = "mongodb+srv://polatipraneeth:bearLeD5Y5fKLSQc@cluster0.8m9rhu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(cors());
app.use(express.json());

app.use('/todos',ToDoRoute);

mongoose.connect(MONGO_URI,{
    useNewUriParser:true,
    useUnifiesTopology:true
}).then(()=>console.log('connected successfully'))
.catch(err=>console.log('not connected ',err));

app.listen(PORT,()=>{
    console.log(`server is running on port number +${PORT}`);
});
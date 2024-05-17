const express = require('express');
const mongoose = require('mongoose');
const routLink=require("./src/routes/appRoutes")//import router
const cors = require("cors");



const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as templating engine 
app.set('views',__dirname+'\\src\\views'); //set views folder for html
app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));//allow cors Origen 


mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //mongo db connection

app.use(express.json());
app.use('/', routLink); //router prefix

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require("express"); 
const mongoose = require('mongoose'); 
const routes = require('./controllers');

const app = express(); 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// link up routes 
app.use(routes); 


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my-report', { 
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🥳 On localhost:${PORT}`));

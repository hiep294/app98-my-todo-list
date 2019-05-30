const express = require('express')
const app = express()
var mongoose = require('mongoose');
var db = mongoose.connection;
const path = require('path')
// body-parser
app.use(express.json())

// connect database
mongoose.connect('mongodb+srv://hiep294:hiep294@cluster0-sig2d.mongodb.net/TodoListDB?retryWrites=true&w=majority', { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB is connected')
});

app.use('/api/todos', require('./routes/api/todos'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.port || 5000
app.listen(port, () => console.log(`Server is starting at ${port}`))
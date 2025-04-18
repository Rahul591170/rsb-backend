const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rahul591170:1oOpjF7UcZOnueBM@cluster0.kxzepel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

  // rahul591170
  // 1oOpjF7UcZOnueBM

  // mongodb+srv://rahul591170:1oOpjF7UcZOnueBM@cluster0.kxzepel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
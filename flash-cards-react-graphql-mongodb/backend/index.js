import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/flashcards_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
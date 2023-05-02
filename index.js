// run `node index.js` in the terminal

const express = require('express');
const app = express();

// Define a GET route that returns the answer to a question
app.get('/answer', (req, res) => {
  const question = req.query.question;
  let answer;

  // Check the question and set the answer
  if (question === 'What is the capital of France?') {
    answer = 'Paris';
  } else if (
    question === 'What is the answer to life, the universe, and everything?'
  ) {
    answer = '42';
  } else {
    answer = "Sorry, I don't know the answer to that question.";
  }

  // Send the answer back to the client
  res.send(answer);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const express = require('express');

const app = express();

const mockData = [{ name: 'Mark' }, { name: 'Jill' }];

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockData
  });
});

app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    user: req.params.id
  });
});

app.listen(8000, () => {
  console.log('server is running');
});

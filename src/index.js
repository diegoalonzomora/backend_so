const express = require('express');
const { connectDB } = require('./database');
const apiRoutes = require('./routes/index.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'Cloudbeds API running' });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

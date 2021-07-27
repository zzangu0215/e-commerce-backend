const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send(`<h1>Wrong Route!</h1>
  <h2>Move on to the following routes!</h2>
  <h3>/api/categories</h3>
  <h3>/api/products</h3>
  <h3>/api/tags</h3>`);
});

module.exports = router;

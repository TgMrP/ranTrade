const { Router } = require('express');

const faqRoute = require('./faq.routes')

const router = Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.use('/fqa', faqRoute)

module.exports = router;

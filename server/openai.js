const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

router.post('/', async (req, res) => {
  const prompt = req.body.prompt;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;

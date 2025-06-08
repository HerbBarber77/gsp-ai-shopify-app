const express = require('express');
const session = require('express-session');
const { shopifyAuth, verifyRequest } = require('@shopify/shopify-express');
const openai = require('./openai');
require('dotenv').config({ path: '../.env' });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  shopifyAuth({
    apiKey: process.env.SHOPIFY_API_KEY,
    secret: process.env.SHOPIFY_API_SECRET,
    scopes: process.env.SHOPIFY_SCOPES.split(','),
    afterAuth(ctx) {
      const { shop, accessToken } = ctx.session;
      ctx.redirect('/');
    }
  })
);

app.use(express.json());
app.use('/api/gpt', verifyRequest(), openai);

app.use(express.static('../web/dist'));

app.listen(PORT, () => {
  console.log(`Publiczna Shopify app działa na porcie ${PORT}`);
});

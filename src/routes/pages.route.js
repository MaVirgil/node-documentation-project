import express from 'express';
import { pages } from '../pages.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(pages.frontPage.render());
});

router.get('/basics', (req, res) => {
  res.send(pages.nodeBasics.render());
});

router.get('/javascript-introduction', (req, res) => {
  res.send(pages.javascriptIntro.render())
});

export default router;
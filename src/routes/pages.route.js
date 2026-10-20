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
  res.send(pages.javascriptIntro.render());
});

router.get('/arrays-and-objects', (req, res) => {
  res.send(pages.arraysAndObjects.render());
});

router.get('/functions', (req, res) => {
  res.send(pages.functions.render());
});

router.get('/dev-tools', (req, res) => {
  res.send(pages.devTools.render());
});

router.get('/dates', (req, res) => {
  res.send(pages.dates.render());
});

router.get('/http-basics', (req, res) => {
  res.send(pages.httpBasics.render());
});

router.get('/designing-rest-api', (req, res) => {
  res.send(pages.restAPI.render());
});

export default router;

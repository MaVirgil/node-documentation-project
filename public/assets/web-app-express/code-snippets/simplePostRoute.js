app.post('/planes', (req, res) => {
  const body = req.body;

  planeService.add(body);

  res.send({
    data: 'ok',
  });
});
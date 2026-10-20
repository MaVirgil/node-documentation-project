app.get('/planes/:id', (req, res) => {

  // fetch param { id } from request:
  const idParam = Number(req.params.id);

  res.send({
    data: planeService.getById(idParam),
  });
});
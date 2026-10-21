app.get('/planes', (req, res) => {

  const engineCountQuery = req.query.engineCount;

  // if query parameter is given, return accordingly
  if (engineCountQuery) {
    res.send({
      data: planeService.filterByEngineCount(engineCountQuery),
    });

    return;
  }

  // Behaviour if query was not given...
});
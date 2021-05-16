// db is an argument to this function so
// that we can make db queries inside
export default function initRoutesController(db) {
  const getRoutes = (req, res) => {
    db.Route.findAll()
      .then((routes) => {
        console.log('/getRoutes sucess!: ======= see below\n', routes);
        res.send({ routes });
      })
      .catch((error) => console.log(error));
  };

  return {
    getRoutes,
  };
}

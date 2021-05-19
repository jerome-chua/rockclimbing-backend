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

  const getTripRoutes = async (req, res) => {
    console.log('req.params.id ======', req.params.id);
    try {
      const tripRoutes = await db.Route.findAll({
        where: {
          tripId: Number(req.params.id),
        },
      });
      console.log('trip routes =====', tripRoutes);
      res.send({ tripRoutes });
    }
    catch (error) {
      console.log(error);
    }
  };

  const addRoute = async (req, res) => {
    try {
      const newRoute = await db.Route.create({
        name: req.body.name,
        tripId: req.body.tripId,
      });
      console.log(newRoute);
      res.send({ newRoute });
    }
    catch (error) {
      console.log(error);
    }
  };

  const addDifficulty = async (req, res) => {
    try {
      const updateDifficulty = await db.Route.update({
        difficulty: Number(req.body.difficulty),
      }, {
        where: {
          id: req.body.routeId,
        },
        returning: true,
      });
      console.log('difficulty updated', updateDifficulty);
    }
    catch (error) {
      console.log(error);
    }
    res.send('workkked');
  };
  return {
    getRoutes, getTripRoutes, addRoute, addDifficulty,
  };
}

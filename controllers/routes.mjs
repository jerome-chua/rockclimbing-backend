// db is an argument to this function so
// that we can make db queries inside
export default function initRoutesController(db) {
  const getRoutes = async (req, res) => {
    try {
      const routes = await db.Route.findAll();
      console.log('routes: ------', routes);

      res.send(routes);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getRoutes,
  };
}

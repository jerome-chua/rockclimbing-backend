// db is an argument to this function so
// that we can make db queries inside
export default function initTripsController(db) {
  const getTrips = async (req, res) => {
    try {
      const trips = await db.Trip.findAll();
      console.log('see trips: ----\n', trips);

      res.send(trips);
    } catch (err) {
      console.log(err);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    getTrips,
  };
}

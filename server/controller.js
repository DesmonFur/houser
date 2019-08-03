module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_all().then(houses => {
      res.status(200).send(houses);
    });
  },

  addHouse:  async (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip, image_url,mortgage,rent } = req.body;
    let houses = await db.add_house([name, address, city, state, zip, image_url,mortgage,rent])
      res.status(201).send(houses);
  },

  deleteHouse: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_house(id).then(result => {
      res.status(201).send(result);
    });
  }
};

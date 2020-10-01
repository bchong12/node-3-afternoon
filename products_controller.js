module.exports = {
  create: (req, res) => {
    const db = req.app.get("db");

    const { name, image_url, price, description } = req.body;

    db.create_product({
      name,
      image_url,
      price,
      description,
    })
      .then((products) => res.status(200).send(products))
      .catch((err) => res.status(500).send("Something went wrong!"));
  },
  getOne: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.read_product({ id })
      .then((product) => res.status(200).send(product))
      .catch((err) => res.status(500).send("Something went wrong!"));
  },
  getAll: (req, res) => {
    const db = req.app.get("db");

    db.read_products()
      .then((products) => res.status(200).send(products))
      .catch((error) => res.status(500).send("Something went wrong"));
  },
  update: (req, res) => {
    const db = req.app.get("db");

    const { desc } = req.query;
    const { id } = req.params;

    db.update_product({ description, id })
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        console.log(err);
      });
  },
  delete: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;

    db.delete_product(id)
      .then((products) => res.status(200).send(products))
      .catch((err) => res.status(500).send("SORRY ITS NOT WORKING!"));
  },
};

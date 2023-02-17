// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const MongoClient = mongodb.MongoClient;
// const uri = "mongodb+srv://<YOUR_DB_CREDENTIALS>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
const admin = require("firebase-admin");

const serviceAccount = require("./api-inventory-abb3a-firebase-adminsdk-9thkh-598b1c7080.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://api-inventory-abb3a-default-rtdb.europe-west1.firebasedatabase.app"
});

  const db = admin.firestore();
  const items = db.collection('items');

  const createInventory = async (inventory) => {
    const inventoryRef = items.doc();
    await inventoryRef.set(inventory);
    return inventoryRef.id;
  };
  
  const readInventory = async (inventoryId) => {
    const inventoryRef = items.doc(inventoryId);
    const inventory = await inventoryRef.get();
    return inventory.data();
  };
  
  const updateInventory = async (inventoryId, updates) => {
    const inventoryRef = items.doc(inventoryId);
    await inventoryRef.update(updates);
  };
  
  const deleteInventory = async (inventoryId) => {
    const inventoryRef = items.doc(inventoryId);
    await inventoryRef.delete();
  };
  
  const listInventory = async () => {
    const inventoryList = await items.get();
    return inventoryList.docs.map(doc => doc.data());
  };
 
  app.get('/api/items', (req, res) => {
    items
      .get()
      .then(snapshot => {
        const inventory = [];
        snapshot.forEach(doc => {
          let data = doc.data();
          data.id = doc.ref.id;
          inventory.push(data);
        });
        res.json(inventory);
      }) 
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });
  // .catch(function(error) {
  //   console.log("Error getting document:", error);
  // });
  // });

  app.post('/api/items', async (req, res) => {
    const newItem = {
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      cost: req.body.cost,
      price: req.body.price
    };
  
    items
      .add(newItem)
      .then(doc => {
        res.status(201).json({
          message: "Item created successfully",
          itemId: doc.id
        });
      })
      .catch(err => {
        res.status(500).json({ error: "Error creating item: " + err });
      });
  });
  app.delete('/api/items/delete/:id', async (req, res) => {
    try {
      const itemId = req.params.id;
      const itemRef = db.doc(`items/${itemId}`);
      await itemRef.delete();
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.put('/api/items/modify/:id', async (req, res) => {
    try {
      const updatedData = req.body;
      const itemId = req.params.id;
      const itemRef = db.doc(`items/${itemId}`);
      await itemRef.update(updatedData);
      res.json({ message: 'Item modified successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });

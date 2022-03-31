import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !email.includes("@") || !name || !message) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    //Store it in a database
    const mess = {
      email,
      name,
      message,
    };
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.kwebx.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: "Failed to connect to database!" });
      return;
    }

    const db = client.db();
    try {
      const res = await db.collection("messages").insertOne(mess);
      mess.id = res.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Wrong inserting mongodb" });
      return;
    }

    client.close();
    res.status(201).json({ message: "Success saved contact" });
  }
}

export default handler;

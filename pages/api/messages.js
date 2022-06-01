import { MongoClient } from "mongodb";

async function handler(req, res) {
    const client = await MongoClient.connect('mongodb+srv://latz:68383441@portfoliocluster.q4hbe.mongodb.net/Portfolio?retryWrites=true&w=majority')

    if (req.method === 'POST') {
        const name = req.body.name;
        const company = req.body.company;
        const reach = req.body.reach
        const message = req.body.message

        const db = client.db();

        await db.collection('messages').insertOne({name, company, reach, message})

        res.status(201).json({message: 'New message inserted'})
        
    }
}

export default handler;
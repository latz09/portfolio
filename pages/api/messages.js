import { connectToDatabase } from '../../lib/mongodb';

async function handler(req, res) {
	const db = await connectToDatabase();

	if (req.method === 'POST') {
		const name = req.body.name;
		const company = req.body.company;
		const reach = req.body.reach;
		const message = req.body.message;

		await db
			.collection('messages')
			.insertOne({ name, company, reach, message });

		res.status(201).json({ message: 'New message inserted' });

		client.close();
	}

	if (req.method === 'GET') {
		const messages = await db.collection('messages').find().toArray();

		res.status(200).json({ messages });
	}
}

export default handler;

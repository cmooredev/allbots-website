import mongoose from 'mongoose';
import FormSubmission from '../../models/formSubmission';

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
  // If already connected, use the existing connection
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  // Use new database connection
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, botIdea, hosting, additionalInfo } = req.body;

    try {
      await connectToDatabase();

      // Create a new document using the FormSubmission model
      const submission = new FormSubmission({
        email,
        botIdea,
        hosting,
        additionalInfo,
        timestamp: new Date()
      });

      // Save the document to the database
      await submission.save();

      res.status(200).json({ message: 'Form submitted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while saving the form submission.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

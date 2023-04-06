import mongoose from 'mongoose';

const FormSubmissionSchema = new mongoose.Schema({
  email: String,
  botIdea: String,
  hosting: String,
  additionalInfo: String,
  timestamp: Date
});

const FormSubmission = mongoose.models.FormSubmission || mongoose.model('FormSubmission', FormSubmissionSchema);
export default FormSubmission;

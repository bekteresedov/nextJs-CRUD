import mongoose, { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  surname: string;
  mobile: string;
  email: string;
  address: string;

}

const userSchema = new mongoose.Schema({
        username: {
          type: String,
          required: true,
        },
        surname: {
            type: String,
            required: true,
          },
        mobile: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
       
        address: {
          type: String,
          required: true,
        },
});

export default mongoose.models.User || mongoose.model<User>('User', userSchema);


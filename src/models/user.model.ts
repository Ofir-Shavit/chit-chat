import { Schema, model } from 'mongoose';

interface User {
    email: string,
    name: string,
    picture: string
}

const schema = new Schema<User>({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
});

const UserModel = model<User>('User', schema);

export default UserModel;

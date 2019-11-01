import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String,
        bio: String,
        user: {
            type: String,
            lowercase: true,
            required: [ true, "can't be blank"],
            match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
            index: true
        }
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    id: {
        type: String,
        required: [ true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    password: {
        type: String,
        required: [ true, "can't be blank"],
    }
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

export default UserSchema;

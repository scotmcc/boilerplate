import mongoose from 'mongoose';

import UserSchema from './models/users';

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.model('User', UserSchema);

export default mongoose

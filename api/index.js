import express from 'express';
import mongoose from 'mongoose';
const PORT = 3000

const encodedPassword = encodeURIComponent("valluvantamilschool@123");
const connectionString = `mongodb+srv://admin:${encodedPassword}@vts-admin.hoqeksz.mongodb.net/?appName=vts-admin`

mongoose.connect(connectionString).then(() => {
    console.log('Database is connected');
});
const app = express();

app.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});
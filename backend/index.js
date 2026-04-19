import express from 'express';
import authRouter from './routes/auth.route.js';
const app = express();
import { connectDB } from './db/connectDB.js';
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// /means home page
// app  means our backend application
app.use("/api/auth",authRouter);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
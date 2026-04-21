import express from 'express';
import { connectDB } from './db/connectDB.js';
import authRouter from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hi the this is backend server');
});
// app  means our backend application
app.use("/api/auth",authRouter);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
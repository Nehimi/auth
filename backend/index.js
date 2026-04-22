import express from 'express';
import cookieParser from 'cookie-parser';
import { connectDB } from './db/connectDB.js';
import authRouter from './routes/auth.route.js';
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());//allows us to parse cookies from the request object
app.use(express.json());//allows us to parse json data from the request body

app.get('/', (req, res) => {
    res.send('hello this is backend server');
});
// app  means our backend application
app.use("/api/auth",authRouter);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
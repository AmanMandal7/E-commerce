const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// config
dotenv.config({ path: "backend/config/config.env" });

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`API is running on http://localhost:${process.env.PORT}`);
})
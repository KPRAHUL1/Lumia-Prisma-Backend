import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { authContextMiddleware } from "./shared/lib/middleware/auth-context";
import { Sequelize } from "sequelize"; // Import Sequelize

dotenv.config();

const app: Express = express();

// --- DATABASE CONNECTION SETUP ---
const sequelize = new Sequelize(process.env.DATABASE_URL || '', { // Ensure DATABASE_URL is not undefined
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      // BE CAREFUL WITH rejectUnauthorized: false IN PRODUCTION!
      // This allows connecting to databases with self-signed or invalid SSL certs.
      // For Render, it's often needed if they use a specific setup,
      // but if you can validate the cert, remove this line.
      rejectUnauthorized: false,
    },
  },
  logging: false, // Optional: Set to true to see SQL queries in console
});

// Test the database connection and then start the server
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');

    // --- SERVER CONFIGURATION AND START ---
    const host = process.env.APP_HOST || '0.0.0.0'; // Use 0.0.0.0 for Render deployment
    const port = process.env.PORT || 5000; // Use process.env.PORT for Render, default to 5000 for local

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //Express configuration.
    app.set("host", host);
    app.set("port", port);

    // Using custom CORS policy
    // IMPORTANT: For production, replace '*' with your frontend domain(s)
    app.use((req, res, next) => {
      res.append('Access-Control-Allow-Origin', '*'); // Change this to your frontend URL(s) in production
      res.append('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS'); // Add PATCH, OPTIONS
      res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin, X-Requested-With'); // Be specific with headers
      next();
    });

    app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });

    // Import and use your routes
    const authApi = require('./modules/auth/auth.route'); // Consider using import statements if possible
    const categoryApi = require('./modules/category/category.route');
    const brandApi = require('./modules/brand/brand.route');
    const socialMediaApi = require('./modules/socilamedia/socialmedia.route'); // Typo: socilamedia -> socialmedia?
    const productApi = require('./modules/product/product.route');
    const seasonApi = require('./modules/seasons/season.route');
    const subjectApi = require('./modules/subject/subject.route');
    const staffApi = require('./modules/staff/staff.route');
    const assignSubjectApi = require('./modules/assignSubject/assignSubject.route');

    // Middleware that applies to all routes below it
    app.use(authContextMiddleware);

    // Routes
    app.use('/api/category', categoryApi);
    app.use('/api/brand', brandApi);
    app.use('/api/socialmedia', socialMediaApi); // Typo: socilamedia -> socialmedia?
    app.use('/api/product', productApi);
    app.use('/api/season', seasonApi);
    app.use('/api/auth', authApi);
    app.use("/api/staffs", staffApi);
    app.use("/api/subjects", subjectApi);
    app.use("/api/assignSubjects", assignSubjectApi);

    // Serve static files from the 'uploads' directory
    app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

    // Start the server
    app.listen(app.get("port"), () => {
      console.log(
        "Server started at %s : %d ",
        app.get("host"),
        app.get("port"),
      );
    });

  })
  .catch((err:any) => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit the process if database connection fails
  });
// --- END DATABASE CONNECTION SETUP ---

// It's generally better to export the `app` instance after it's fully configured,
// but for this setup, the `app.listen` is inside the promise, so just export it.
// If you run tests, you might want to export it before listen() to allow supertest etc.
module.exports = app;
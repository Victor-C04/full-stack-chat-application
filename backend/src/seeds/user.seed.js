import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "cersei@email.com",
    fullName: "Cersei Lannister",
    password: "123456",
    profilePic: "https://wikiofthrones.com/wp-content/uploads/2025/01/Cersei-Lannister-in-Game-of-Thrones.jpg",
  },
  {
    email: "alicent@email.com",
    fullName: "Alicent Hightower",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/43/a7/e4/43a7e4c3ec035e0fe4f3ee27eeb09f73.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
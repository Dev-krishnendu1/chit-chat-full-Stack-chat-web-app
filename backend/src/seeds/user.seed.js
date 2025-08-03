import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "sonali.das@example.com",
    fullName: "sonali Das",
    password: "123456",
    profilePic: "https://stock.adobe.com/in/images/bold-indian-woman-in-emerald-sari-against-flowing-teal-fabric/1514026313",
  },
  {
    email: "dipa.kar@example.com",
    fullName: "Dipa Kar",
    password: "123456",
    profilePic: "https://stock.adobe.com/in/images/a-beautiful-indian-woman-wearing-a-light-pink-and-orange-saree-holding-sweets-on-a-plate-a-gold-necklace-around-her-neck/972204343",
  },
  {
    email: "Diksha.Singh@example.com",
    fullName: "Diksha Singh",
    password: "123456",
    profilePic: "https://stock.adobe.com/in/images/beautiful-indian-woman-in-traditional-saree-and-jewelery/678105871",
  },
  {
    email: "rabina.tandon@example.com",
    fullName: "Rabina Tandon",
    password: "123456",
    profilePic: "https://stock.adobe.com/in/images/indian-woman-wearing-saree-and-gold-jewelry/1418772976",
  },
  {
    email: "paramita.bera@example.com",
    fullName: "Paramita Bera",
    password: "123456",
    profilePic: "https://stock.adobe.com/in/images/indian-girl-in-sari-or-saree-traditional-cloth-smiling-woman-long-hair/642136390",
  },
  {
    email: "sangita.sengupta@example.com",
    fullName: "Sangita Sengupta",
    password: "123456",
    profilePic: "https://stock.adobe.com/in/images/young-beautiful-indian-woman-in-saree/806237832",
  },
  {
    email: "barnali.jana@example.com",
    fullName: "Barnali Jana",
    password: "123456",
    profilePic: "https://images.pexels.com/photos/15602468/pexels-photo-15602468.jpeg",
  },
  {
    email: "disha.roy@example.com",
    fullName: "Disha Roy",
    password: "123456",
    profilePic: "https://stock.adobe.com/in/images/young-indian-woman-in-traditional-saree/637377422",
  },

  // Male Users
  {
    email: "krishnendu.maity@example.com",
    fullName: "Krishnendu Maity",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "purna.pradhan@example.com",
    fullName: "Purna Pradhan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "sagnik.ghosh@example.com",
    fullName: "Sagnik Ghosh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "sayan.roy@example.com",
    fullName: "Sayan Roy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "abhi.singh@example.com",
    fullName: "Abhi Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "kankodip.som@example.com",
    fullName: "Kankodip Som",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "shubhodeep.singha@example.com",
    fullName: "Shubhodeep Singha",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
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

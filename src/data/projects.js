import project2 from "../assets/images/img.jpg";
import project1 from "../assets/images/front.png";
export const projects = [
  {
    id:2,
    title: "E-Commerce Web Application",
    description:"A full-stack e-commerce platform where users can browse products, search and filter items, manage wishlists and carts, place orders, and submit reviews and ratings, with secure authentication, admin management, and Cloudinary-based image storage.",
    tech: ["HTML","CSS","JavaScript","React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    image: project1,
    github:"https://github.com/Aditya107827/ecommerce-mern",
    live:"https://ecommerce-mern-tawny-three.vercel.app/",
  },
  {
    id: 2,
    title: "Campus Lost & Found",
    description:
      "A web application to report and claim lost or found items within a campus.",
    tech: ["React", "Node.js", "MongoDB"],
    image: project2,
    github: "https://github.com/Aditya107827/campus-lost-found",
    live: "",
  },
];
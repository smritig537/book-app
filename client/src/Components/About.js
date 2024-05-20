import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className='dark:bg-white dark:text-black'>
    <div className="max-w-3xl mx-auto px-4 py-8 dark:bg-white dark:text-black text-white">
    <br/>
    <br/>
    <br/>
      <h1 className="text-3xl font-bold mb-4">About Bookshelf</h1>
      <p className="text-lg mb-4">Welcome to Bookshelf - your digital haven for organizing and exploring your favorite books!</p>
      <p className="text-lg mb-4">Bookshelf is a React-based web application designed to help book lovers manage their reading lists, discover new titles, and connect with fellow readers.</p>
      <h2 className="text-2xl font-bold mb-2">Features:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Personalized Library:</strong> Keep track of the books you've read, want to read, and are currently reading.</li>
        <li><strong>Search and Discover:</strong> Explore a vast collection of books, search by title, author, or genre, and discover your next favorite read.</li>
        <li><strong>Community Interaction:</strong> Connect with other book enthusiasts, share reviews, recommendations, and participate in discussions.</li>
        <li><strong>Customization:</strong> Personalize your bookshelves with custom categories, tags, and ratings.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Our Mission:</h2>
      <p className="text-lg mb-4">At Bookshelf, we believe in the power of stories to inspire, educate, and transform lives. Our mission is to foster a thriving community of readers by providing a platform that makes it easy and enjoyable to discover, organize, and share books.</p>
      <p className="text-lg mb-4">Whether you're a seasoned bibliophile or just beginning your reading journey, Bookshelf is here to accompany you every step of the way.</p>
      <h2 className="text-2xl font-bold mb-2">Contact Us:</h2>
      <p className="text-lg mb-4">We'd love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us at .</p>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;

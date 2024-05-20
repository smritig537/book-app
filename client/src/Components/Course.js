import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect,useState} from 'react';

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BOOK_API);
        console.log(process.env.REACT_APP_BOOK_API);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className='container px-4 py-20 dark:bg-white max-w-screen-2xl md:px-20 bg-slate-600'>
      <div className='items-center justify-center text-center mt-28'>
        <h1 className='text-2xl font-semibold dark:text-black md:text'>
          We're delighted to have you <span className='text-pink-500'>Here:)</span>
        </h1>
        <p className='mt-12 dark:text-black'>
          Welcome to Bookshelf Haven, your online destination for all things book storage! 
          Whether you're a bibliophile with an extensive collection or just looking for creative ways 
          to display your favorite reads, we've got you covered.
          
          Explore our wide range of bookshelves, from minimalist designs perfect for modern interiors 
          to rustic styles that add charm to any room. Browse through various materials like wood, 
          metal, and glass, each offering its unique aesthetic appeal and durability.
        </p>
        <Link to="/">
          <button className='px-4 py-2 mt-6 text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700'>
            Back
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-1 mt-12 md:grid-cols-4'>
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
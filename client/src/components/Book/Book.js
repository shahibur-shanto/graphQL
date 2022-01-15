import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../../queries/Queries/Queries';

const Book = (props) => {
    
  
    
          const { loading, error, data } = useQuery(getBookQuery);
          
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            
    return (
        data.books.map(book=>{
            return(
                <li key={book.id}>
                {book.name}
                
            </li>
            )
        })
        
    );
};

export default Book;
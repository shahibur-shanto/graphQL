// import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Book from '../Book/Book';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,

  } from "@apollo/client";
import AddBook from '../AddBook/AddBook';




    //   function AllBooks() {
    //     const { loading, error, data } = useQuery(BookList);
      
    //     if (loading) return <p>Loading...</p>;
    //     if (error) return <p>Error :(</p>;
      
    //     return data.rates.map(({ currency, rate }) => (
    //       <div key={currency}>
    //         <p>
    //           {currency}: {rate}
    //         </p>
    //       </div>
    //     ));
    //   }
    //   //const {data} = useQuery(getBookQuery);
  
      //const allBooks = data.books;
      
        // console.log(typeof(data.books))
        // console.log(data.books)
        const BookList = () => {

             
              const client = new ApolloClient({
                uri: 'http://localhost:4000/graphql/',
                cache: new InMemoryCache()
              });
              
                  
              
        return (
            <ApolloProvider client={client}>
        <div>
            <ul>
            <Book/>
            </ul>
            <AddBook/>
        </div>
        </ApolloProvider>
    );
};

export default BookList;
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../../queries/Queries/Queries';

const AddBook = () => {
        const [addBook,setAddBook]= useState({
            name:"",
            genre:"",
            authorId:""
        })

        

          const { loading, error, data } = useQuery(getAuthorsQuery);
          
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            
          var displayAuthors = ()=>{
               if(loading) return (<option>Loading.......</option>)
               else return (
                   data.authors.map(author=>{return (<option key={author.id} value={author.id}>{author.name}</option>)})
               )
           }
           
        const handleSubmit= e => {
            e.preventDefault();
            console.log(addBook);

          }
            
    return (
        
        <div>
             <form id="add-book" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e)=>
                    setAddBook({...addBook,name:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e)=>
                    setAddBook({...addBook,genre:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e)=>
                    setAddBook({...addBook,authorId:e.target.value})}>
                        <option>Select author</option>
                            {displayAuthors()}
                        
                    </select>
                </div>
                <button>+</button>

            </form>
        </div>
    );
};

export default AddBook;
import React from 'react'
import Book from './Book';
import { books } from './bookarray';
// const firstBook = {
//     author: "Anand Ranganathan",
//     title: "The psychology Of Money",
//     img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg"

// }
// const secondBook = {
//     author: "James Clare",
//     title: "Atomic Habits: the life-changing million-copy ",
//     img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"

// }


// const Booklist = () => {
//     return (<>
//         <h1 className="heading">Booklist</h1>
//     <section className="booklist">
//         <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}   >
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at illo eligendi maxime repellat qui dignissimos quae exercitationem dicta dolore!</p>
//         </Book>
//         <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
//         {/* <Book />
//         <Book />
//         <Book />
//         <Book />
//         <Book />
//         <Book />
//         <Book /> */}
//         </section>
//     </>);
// }

// const names = ['John', 'Peter', 'Mathew'];
// const newName = names.map((name) => {
//     return <h1>{name}</h1>
// })
// console.log(newName)

// const Booklist = () => {
//     return (
//         <section className="booklist">
//             {/* {books.map((book, idx) => {//create an array of JSX elements
               
//                 // const { img, title, author } = book;
//                 // return (
//                 //     <div key={ idx}>
//                 //         <h3>{title}</h3>
//                 //         <h6>{author}</h6>
//                 //     </div>
//                 // )
                
//                 } */
//             }
//             {
//                 books.map((book) => {
//                     // const { img, title, author } = book;
                 
//                     return (
//                         <Book book={ book}></Book>
//                     );
//                 })
//             }
//         </section>
//     )
// }
/*
[
    <div>
        <h3>{title}</h3>
        <h6>{author}</h6>
    </div>,
    <div>
        <h3>{title}</h3>
        <h6>{author}</h6>
    </div>,
]
*/
const Booklist = () => {
    return (
        <section className="booklist">
            {
                books.map((book,index) => {//create list of jsx elements
                    return (
                        // <Book key={book.id} book={book}></Book>//we are passing a parameter book containing single book object
                        //We can also use spread operator to send the props
                        <Book key={book.id} {...book}></Book>// it will split all the properties of book and pass to component
                        )
                })
           }
        </section>
    )
}
export default Booklist;


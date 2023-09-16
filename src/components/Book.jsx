// import React from 'react';
// import Image from './Image';
// import Title from './Title';
// import Author from './Author';
const price = 24.00;
const production = 'Megha';
const ratings = "*****";

//setup variables
// const author = "Anand Ranganathan";
// const title = "The psychology Of Money";
// const img = "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg";

//merging all variables into a single variable
// const firstBook = {
//     author : "Anand Ranganathan",
//     title: "The psychology Of Money",
//     img : "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg"

// }



// const Book = (props) => {
//     return (<article className='book'>
//         <img src={props.img} alt=""></img>
//         <h1>{props.title}</h1>
//         <h4>{props.author}</h4>
//     </article>);


//by using object destruring
// const Book = ({ book: { img, title, author } }) => {
//     // console.log();
//     // const { img, title, author } = props.book;
//     return (<article className='book'>
//         <img src={img} alt=""></img>
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//         </article>);
// };

// //3rd way to destructure
// const Book = ({ img, title, author }) => {

//     console.log(img);
//     return (<article className='book'>
//         <img src={img} alt=""></img>
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//         {/* {children} */}
//     </article>);
// };

//Book Component
const Book = (props) => {
   
    // const { img, author, title } = props.book;//every parameter send through component get collected it props object(props.book)
    const { img, author, title } = props;
    const eventHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert("Welcome");
    }
    const complexProblem = (author) => {
        console.log(author);
    }
    return (
        <article className='book' onMouseOver={() => {
            console.log(title);
        }}>
            <img src={img} alt="" />
            <h1 onClick={() => {
                console.log(title);
            }}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={eventHandler}>Description</button>
            
            {/* If we pass function with parenthesis ,it will call every time when component is rendered 
                and we want to execute function only when clicked
                so in the case we will either pass function name {eventHandler} like this and
                if we have parenthesis then we will wrap it in arrow function
                not like this 
                <button type="button" onClick={complexProblem(author)}>Complex Button</button>
                but like this 
            */}
            <button type="button" onClick={() => { complexProblem(author) }}>Complex Button</button>
        </article>
    )
}
export default Book;
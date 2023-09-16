const greetings = [
    "hello",
    "good morning",
    "hi",
]

// const g = [];

// for (let greet of greetings) {
//     g.push(<h1>{ greet }</h1>)
// }

// const greetingsJSX = [
//     <h1>hello</h1>,
//     <h1>good morning</h1>,
//     <h1>hi</h1>,
// ]

const greetingsJSX = greetings.map(greeting => <h1>{greeting}</h1>)

const Test = () => {
    return (
        <div>
            { greetingsJSX }
        </div>
    )
}

export default Test

// import React from 'react' bu import JSX kod yazmama olanak tanir

const root = document.getElementById('root');


// const h1 = document.createElement('h1');
// h1.innerHTML = 'Hello Worldzzssssss';
// root.appendChild(h1);                   => Imperative I do every stept to insert h1 in to root like create give value and append

//JSX JavaScript XML
// function MainContent() {
//     return (
//         <h1 className="header">Hello Worldzz</h1>           // => Declarative => Just say h1 and write text 
//     );
// }

// function Content(){
//     return (
//         <p>Hello World Again</p>
//     );
// }

const element = <h1 className='header'>Logo</h1>;
const headerList = <ul className='headerList'>
        <li className='listItem'>Home</li>
        <li className='listItem'>About</li>
        <li className='listItem'>Contanct</li>
</ul>

const header = (
    <header> { element } { headerList } </header>
);

ReactDOM.render(header, root);

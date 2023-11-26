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

// const element = <h1 className='header'>Logo</h1>;
// const headerList = <ul className='headerList'>
//         <li className='listItem'>Home</li>
//         <li className='listItem'>About</li>
//         <li className='listItem'>Contanct</li>
// </ul>

// const header = (
//     <header> { element } { headerList } </header>
// );

// ReactDOM.render(header, root);

const logo = 'logos/reactLogo.png';

const page = <div className="container">
    <img className='reactLogo' src={ logo } alt='React Logo'></img>
    <h1 className='commentHeader'>Fun fuct about Reaact</h1>
    <ul className='commentList'>
        <li className="listItem">Was firsr released in 2013</li>
        <li className="listItem">Was orginaly created by Jordan Walke</li>
        <li className="listItem">Has well over 1ook start on GitHub</li>
        <li className="listItem">Has maintained by Facebook</li>
        <li className="listItem">Powers thousands of enterpise apps, incluiding mobile apps</li>
    </ul>
</div>

ReactDOM.render(page, root);

// root.append(JSON.stringify(page));

//What is the mean of declerative instead of imperative
//Bunu iyi bir seklide aciklamam icin once size imperatibe bir ornek vermem gerekitor.

//IMPERATIVE
//const h1 = documentCreateElement('h1'); 
//h1.innerHTML = 'Header';
//root.appendChild(h1);

//Yukarde sadece bir header eklemem icin 
// 1. adim  h1 elementini olusturdum
// 2. adim  h1 elementinin icinne textimi ekledim
// 3. adimda ise root elementime h1 elementimi append fonkiyonu ile ekledim

//DECLERATIVE
// const h1 = <h1>Header</h1> 
//ReactDOM.render(h1, root);

//Declerative de ise istedigim elemnti yazilima soyluyorum (gosteriyorum) diyorum ki ben h1 elemnti istiyorum icinde textim olsun...
//Direkt bir sekilde h1 yarat(createElement) icine bunu ekle (innerHTML) ve buraya ekle (appendChild) demiyorum...
//RactDOM.render ile ise h1 elementimi root ekliyorum
//Bunlari dili anlayacagi sekilde soyluyorum veya gosteriyorum bunu istiyorum tamamm coder bunu yapiyorum...`
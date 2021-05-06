console.log('Hey boy')


// button JS ....!!!
//  const hello = document.querySelector('#hello');

//  hello.addEventListener('click', function(){
//      console.log('Hey Bro')
//  })


//  lets color button but once......
// const button = document.querySelector('button');
// button.addEventListener('click', function(){
//      document.body.style.backgroundColor = 'olive';
// })


// lets color button with Random Colors
// const button = document.querySelector('button');
// button.addEventListener('click', function(){
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     const color = `rgb(${r},${g},${b})`;
//     document.body.style.backgroundColor = color;
// })

// lets color button with Random Colors----    but with a good format......!!!!!!
const button = document.querySelector('button');
button.addEventListener('click', function(){

    const color = makeRandomColor()
    document.body.style.backgroundColor = color;
})

const makeRandomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

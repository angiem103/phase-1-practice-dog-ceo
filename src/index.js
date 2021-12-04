console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
  firstChallenge()

function firstChallenge() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(json => addingImages(json))
      
  }
  
 
  function addingImages(images) {
    const section = document.querySelector('div');
    
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      section.appendChild(img)
    });
  }
  
 
  })

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  document.addEventListener('DOMContentLoaded', () => {
    secondChallenge()})

  function secondChallenge() {
      fetch(breedUrl)
      .then(resp => resp.json())
      //.then(data => console.log(data))
      .then(data => allDogs(data))


      function allDogs(data) {
          const ul = document.querySelector('ul')
          
          //console.log(ul)
          //console.log(li)
          //console.log(data.message)
          //console.log(Object.keys(data.message))
          Object.keys(data.message).forEach(breed => {
            const li = document.createElement('li')
            li.innerText = `${breed}`
            //console.log(li.innerText)
            ul.appendChild(li).classList.add('puppy')
            //console.log(breed)
          })
         
          }
  }
  
 

 
//let li = document.getElementsByClassName('puppy')

//console.log(li)

document.addEventListener("DOMContentLoaded", function(){
  let li= document.getElementsByClassName('puppy');  
  console.log(li)
  for(let i=0;i<li.length;i++){ 
    li[i].addEventListener('click', () => {
      console.log('I was clicked')
      }); 
    }
})


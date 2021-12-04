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
          const breeds = []
          //console.log(ul)
          //console.log(data.message)
          //console.log(Object.keys(data.message))
          Object.keys(data.message).forEach(breed => {
            breeds.push(breed)})
            //console.log(breeds)
            breeds.forEach( breed => {
            const li = document.createElement('li')
            li.innerText = `${breed}`
            //console.log(li.innerText)
            ul.appendChild(li).classList.add('puppy')
            li.addEventListener('click', (el) => {
              el.target.style.color ='red'
            }); 
             
          })
          
          const sel = document.querySelector('#breed-dropdown')
          //console.log(sel)
          sel.addEventListener('input', function(e) {
            //console.log(e.target.value)
            letter = e.target.value
            //console.log(letter)
           const newArray = []
              breeds.forEach(breed =>{
              if(breed[0] == letter){
                ul.innerHTML = ''
                newArray.push(breed)
              }
            })
            console.log(newArray)

            newArray.forEach( breed => {
              const newli = document.createElement('li')
               newli.innerText = `${breed}`
               ul.appendChild(newli)
            })
          })
        }
             
           
      }
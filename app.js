// fetch('https://api.thedogapi.com/v1/breeds')
//    .then(response => response.json())
//    .then(json =>console.log(json))

   const loadDog = () =>{
      fetch('https://api.thedogapi.com/v1/breeds')
         .then(response => response.json())
         .then(json =>displayDog(json))

   }

   const displayDog = (dogList) =>{
      // console.log(dogList);
      const main = document.getElementById('main');
      // console.log(main);
      const first10Data = dogList.slice(0,10);
      // console.log(first10Data);
      // const div = document.createElement('div');
      // console.log(div);
      for(const dog of first10Data){
         console.log(dog);
         // console.log(dog.image.url);
         const div = document.createElement('div');
         div.className = "col-lg-4"
         // div.className = "col-lg-4"
         div.innerHTML = `
            <h4 class="text-center font-monospace">${dog.name}</h4>
            <img class="img-fluid font-monospace w-400 h-250" src="${dog.image.url}"/>
            <h6>${dog.temperament}</h6>
         `;
         // console.log(div);
         main.appendChild(div);
      }
   } 
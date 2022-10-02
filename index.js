const arrImage = ["url(./JPG/1.jpg)", "url(./JPG/2.jpg)", "url(./JPG/3.jpg)", "url(./JPG/4.jpg)", "url(./JPG/5.jpg)", "url(./JPG/6.jpg)", "url(./JPG/7.jpg)", "url(./JPG/8.jpg)", "url(./JPG/9.jpg)", "url(./JPG/10.jpg)"];
let termArr = document.getElementById("term").value.trim().toUpperCase().split('');
let imageIndex = 0;
document.getElementById('image-block').style.backgroundImage = arrImage[imageIndex];


function getForm(e){
    e.preventDefault(); // Or return false.
    const termArr = document.getElementById("term").value.trim().toUpperCase().split('');
    const category = document.getElementById("category").value;
    console.log(termArr);
    console.log(category);
    
    document.getElementById('forma').style.display = 'none';

    
    // new divs

    const displayCategory = document.createElement("div");
    displayCategory.innerHTML = category;
    document.getElementById("un-list").appendChild(displayCategory);
    displayCategory.setAttribute('id', 'style-category');
    displayCategory.setAttribute('class', 'style-answer-box');




    var ol = document.createElement("ol");
    for (let i of termArr) { 
      let li = document.createElement("li");
       li.innerHTML = i; 
       ol.appendChild(li); 
      }
      document.getElementById("guessed-word").appendChild(ol);
      ol.setAttribute('id', 'answer-letter-style')
      console.log(ol);


    var ol1 = document.createElement("ol");
    for (let i of termArr) { 
      let li1 = document.createElement("li");
       li1.innerHTML = i; 
       ol1.appendChild(li1); 
      }
      document.getElementById("guessed-word").appendChild(ol1);
      ol1.setAttribute('id', 'underscore')
      console.log(ol1);


      // space if term has more words
      for(let i = 0; i < termArr.length; i++){
        if(termArr[i] === ' '){
          document.getElementById('underscore').childNodes[i].style.backgroundColor = "rgb(234, 255, 0)";
          document.getElementById('underscore').childNodes[i].style.boxShadow = "3px 3px 3px rgb(234, 255, 0)";
        }
      }
    
      
      
      document.querySelectorAll('.letter').forEach(item => {
          item.addEventListener('click', event => {
            //handle click
            
              
          if(item.id === event.target.innerText){
            document.getElementById(event.target.innerText).style.marginTop = '-10px';
            document.getElementById(event.target.innerText).style.marginLeft = '5px';
            event.target.style.boxShadow = '3px 3px 3px lightpink';
            for(let i = 0; i < termArr.length; i++){
              if(item.id === termArr[i]){
                document.getElementById('answer-letter-style').childNodes[i].style.zIndex = "1";
              } 
            }

          }
          
          if(termArr.includes(event.target.innerText) === false &&
          imageIndex < 9){
            imageIndex++;
            document.getElementById('image-block').style.backgroundImage = arrImage[imageIndex];
            console.log(imageIndex);
          }

          
          
        })
})


}

 







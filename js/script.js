let queenInfo;

const $name = $('#name');
const $winner = $('#winner');
const $quote = $('#quote');
const $photo = $('#photo');



const $input = $('input[type="text"]')

function handleGetData (event){
    event.preventDefault() 
    $('.dom').remove()
    $.ajax({
        url:`https://www.nokeynoshade.party/api/queens?name=${$input.val()}`
      }).then(
          
        function(data){    
         queenInfo = data;

         $input.val('')
         render();

        },
        function(error){
         console.log('bad request', error);
        }
      );
    }       

    function render(){
        $name.text(queenInfo[0].name);
        $winner.text(queenInfo[0].winner);
        $quote.text(queenInfo[0].quote);
        $photo.attr("src", queenInfo[0].image_url);
        queenInfo[0].seasons.forEach(element => {
            
            let div = document.createElement('div');
            div.className= 'dom'
            let main = document.querySelector('main');
            main.children[2].insertAdjacentElement("afterend",div)
            let newH2 = document.createElement('h2');
            newH2.textContent = "Season";
            div.appendChild(newH2);
            let newh3 = document.createElement('h3');
            newh3.textContent= element.seasonNumber;
            div.appendChild(newh3)

            
        });
        
        
    }
    
    $('form').on('submit', handleGetData);
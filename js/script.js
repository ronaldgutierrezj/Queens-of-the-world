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
            let table = document.querySelector('table')
            
            let tr = document.createElement('tr');
            tr.className='dom';

            let td = document.createElement('td');
            td.textContent= element.seasonNumber;
            tr.appendChild(td)
            let td2 = document.createElement('td');
            td2.textContent= element.place;
            tr.appendChild(td2)
            table.appendChild(tr)

            
        });
        
        
    }
    
    $('form').on('submit', handleGetData);
let queenInfo;

const $name = $('#name');
const $winner = $('#winner');
const $quote = $('#quote');
const $photo = $('#photo')

const $input = $('input[type="text"]')

function handleGetData (event){
    event.preventDefault() 
    $.ajax({
        url:`https://www.nokeynoshade.party/api/queens?name=${$input.val()}`
      }).then(
        function(data){    
         queenInfo = data;
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
        $photo.attr("src", queenInfo[0].image_url)
        
        
    }
    
    $('form').on('submit', handleGetData);
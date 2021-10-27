let gameBoard = ['','','','','','','','','']; 
let turns = 0; 
let xo=document.getElementById('xo');

let play=document.getElementById('play');
play.addEventListener('click', start);

let reset=document.getElementById('r');
reset.addEventListener('click', resetb);

const cells=document.querySelectorAll('.cell');

function start(){
    xo=document.getElementById('xo').value;
    console.log(xo);
    hgame();
}    

function hgame(){

    let p1=xo;
    let p2;
    if(p1==='X'){
    p2='O';
    console.log(p2);
    }
    else{
    p2='X';
    console.log(p2);
    }
    
    for(var i=0; i<cells.length; i++){
            cells[i].addEventListener('click',turn);
    }
    
    function turn(square){
    
        if(turns%2===0){
            if (cells[square.target.id].innerHTML !== '') {
            console.log('This cell is already taken.');
            }
            else{
            console.log(square.target.id);
            gameBoard[square.target.id]=p1;
            cells[square.target.id].innerText=p1;
            turns++;
            console.log(gameBoard);
            win();
            }
        }
        else{
            if (cells[square.target.id].innerHTML !== '') {
            console.log('This cell is already taken.');
            }
            else{
            console.log(square.target.id);
            gameBoard[square.target.id]=p2;
            cells[square.target.id].innerText=p2;
            turns++;
            console.log(gameBoard);
            win();
        
            }
        }
        
        if (turns===8){
            alert("Tie");
        }
    }
    
}


function win(){
				
    console.log("eame End");
        
            if(gameBoard[0]!='' && gameBoard[0]===gameBoard[1] && gameBoard[1]===gameBoard[2]){
                alert("winner is " +gameBoard[0]);
                resetb();
                
            }
            
            if(gameBoard[3]!='' && gameBoard[3]===gameBoard[4] && gameBoard[4]===gameBoard[5]){
                alert("winner is " +gameBoard[3]);
                resetb();
            }
            
            if(gameBoard[6]!='' && gameBoard[6]===gameBoard[7] && gameBoard[7]===gameBoard[8]){
                alert("winner is " +gameBoard[6]);
                resetb();
            }
            
            if(gameBoard[0]!='' && gameBoard[0]===gameBoard[3] && gameBoard[3]===gameBoard[6]){
                alert("winner is " +gameBoard[0]);
                resetb();
            }
            
            if(gameBoard[1]!='' && gameBoard[1]===gameBoard[4] && gameBoard[4]===gameBoard[7]){
                alert("winner is " +gameBoard[1]);
                resetb();
            }
            
            if(gameBoard[2]!='' && gameBoard[2]===gameBoard[5] && gameBoard[5]===gameBoard[8]){
                alert("winner is " +gameBoard[2]);
                resetb();
            }
            
            if(gameBoard[0]!='' && gameBoard[0]===gameBoard[4] && gameBoard[4]===gameBoard[8]){
                alert("winner is " +gameBoard[0]);
                resetb();
            }
            
            if(gameBoard[2]!='' && gameBoard[2]===gameBoard[4] && gameBoard[4]===gameBoard[6]){
                alert("winner is " +gameBoard[2]);
                resetb();
            }
    
}
    
function resetb(){
    location.reload(); 
}
    
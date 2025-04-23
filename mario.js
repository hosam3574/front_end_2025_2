var mario=document.getElementById('mario')
console.log(msrio)


function moveUp(){
console.log("up")

}
function moveDown(){
    console.log("down")
    
    }

    function moveLift(){
        console.log("lift")
        left = left-10
        mario.style.left= left+'px'
        console.log(mario.style.left) 
        
        }

        function moveRight(){
            console.log("right")
              left=left+10
            mario.style.left=left+'px'
        }
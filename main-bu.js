let stopEvent = false;
document.querySelector('#red').style.marginLeft = '0vmin';
document.querySelector('#red').style.marginTop = '0vmin';



// boxNumbers();

$(".category").on("click", function(d){
    console.log(d.target.id);
    $(".category").css("background-color", "grey")
    $(this).css("background-color", "red")
    $(".players img").css("display", "none")
    $("."+d.target.id).css("display", "block")
    document.querySelector('#red').style.marginLeft = '0vmin';
    document.querySelector('#red').style.marginTop = '0vmin';
})

$("#resetGame").on("click", function(t){
    document.querySelector('#red').style.marginLeft = '0vmin';
    document.querySelector('#red').style.marginTop = '0vmin';

})

document.getElementById("closeBtn").addEventListener("click", function() {
    document.querySelector('.model').style.display = "none";
});


document.getElementById("rolldice").addEventListener("click", async(e)=>{
    // console.log(event.keyCode);
    // let rollpos = [16, 9]
    // let myIndex = 0;
    // console.log(rollpos[myIndex]);
    // myIndex = (myIndex+1)%(rollpos.length);
    // console.log("trigger key")
    let diceNum = await roll();
        let isOutofRange =  checkRange(diceNum);
        console.log(diceNum);
        document.querySelector('#dicenumber').innerHTML = diceNum;
        await new Promise(resolve => setTimeout(resolve, 400))
        if(!isOutofRange){
            // await run(diceNum);
            await run(3);
            await new Promise(resolve => setTimeout(resolve, 400))
        }
        stopEvent = false;
})

// document.addEventListener("keydown", async(e)=>{
//     // console.log(event.keyCode);
//     if(e.keyCode === 40 && !stopEvent){
//         console.log("trigger key")
//         let diceNum = await roll();
//         let isOutofRange =  checkRange(diceNum);
//         console.log(diceNum);
//         document.querySelector('#dicenumber').innerHTML = diceNum;
//         await new Promise(resolve => setTimeout(resolve, 400))
//         if(!isOutofRange){
//             await run(diceNum);
//             await new Promise(resolve => setTimeout(resolve, 400))
//         }
//         stopEvent = false;
//     }
// })

function checkRange(diceNum){
    let isOutofRange = false;
    if(marginTop() == -88.2 && (marginLeft()+Number((diceNum*-9.8).toFixed(1))) < 0){
        isOutofRange = true;
    }
    return isOutofRange;
}

function run(diceNum){
    return new Promise(async(resolve, reject)=>{
        for(i=1; i<=diceNum; i++){
            let direction = getDirection();
            await move(direction);
        }
        await checkLaddersAndSnakers();
        resolve()
    })
}

function checkLaddersAndSnakers(){
    return new Promise(async(resolve, reject)=>{
        let froms = [[29.4, 0], [88.2, 0], [29.4, -9.8], [0, -19.6], [9.8, -19.6], [49, -19.6], 
        [78.4, -29.4], [39.2, -49], [9.8, -58.8], [19.6, -58.8], [68.6, -58.8], [78.4, -58.8],
        [39.2, -68.6], [49, -78.4], [9.8, -88.2], [68.6, -78.4], [68.6, -78.4]]

        let tos = [[39.2, -9.8], [49, 0], [9.8, -29.4], [0, -49], [19.6, -9.8], [49, -29.4], 
        [68.6, -39.2], [58.8, -68.6], [0, -68.6], [19.6, -29.4], [88.2, -49], [78.4, -39.2],
        [19.6, -39.2], [58.8, -88.2], [9.8, -78.4], [58.8, -9.8], [88.2, -68.8]]
                
        let message = [[16, "Headline goes here", "In disarray, Republicans search for message and messenger", "https://thefederal.com/opinion/in-disarray-republicans-search-for-message-and-messenger/"], 
        [6, 49, 0], [39, 9.8, -29.4], [60, 0, -49], [18, 19.6, -9.8], [35, 49, -29.4], 
        [48, 68.6, -39.2], [74, 58.8, -68.6], [80, 0, -68.6], [38, 19.6, -29.4], [51, 88.2, -49], [49, 78.4, -39.2],
        [43, 19.6, -39.2], [94, 58.8, -88.2], [82, 9.8, -78.4], [14, 58.8, -9.8], [71, 88.2, -68.8]]
                
        // console.log("marginLeft():", marginLeft() );
        // console.log("marginTop():", marginTop() );

        for(let i=0; i<tos.length; i++){
            if(marginLeft() == froms[i][0] && marginTop() == froms[i][1]){
                document.querySelector('#red').style.marginLeft = `${tos[i][0]}vmin`;
                document.querySelector('#red').style.marginTop = `${tos[i][1]}vmin`;
                await new Promise(resolve => setTimeout(resolve, 400))
                // alert(message[i])
                // document.querySelector('#message').innerHTML = message[i]
                document.querySelector('.modal-headline').innerHTML = message[i][1];
                document.querySelector('.modal-desc').innerHTML = message[i][2];
                document.querySelector('.modal-desc').innerHTML = message[i][2];
                document.querySelector('.modal-link').href=message[i][3];
                document.querySelector('.model').style.display = "block";
                await new Promise(resolve => setTimeout(resolve, 400))
                break
            }
        }
        resolve()
    })
}

function move(direction){
    return new Promise(async(resolve, reject)=>{
        // console.log(direction);
        if(direction == 'up'){
            document.querySelector("#red").style.marginTop = String(marginTop() - 9.8) + 'vmin'
        }else if(direction == 'right'){
            document.querySelector("#red").style.marginLeft = String(marginLeft() + 9.8) + 'vmin'
        }else if(direction == 'left'){
            document.querySelector("#red").style.marginLeft = String(marginLeft() - 9.8) + 'vmin'
        }
        await new Promise(resolve => setTimeout(resolve, 400))
        resolve()

    })
}

function getDirection(){
    let direction;
    if((marginLeft()==88.2 && ((((marginTop()*10)%(-19.6*10))/10==0)) || (marginLeft()==0 && ((((marginTop()*10)%(-19.6*10))/10) != 0)))){
        direction = "up"
    }else if((((marginTop()*10)%(-19.6*10))/10)==0){
        direction = 'right'
    }else{
        direction = "left"
    }
    // console.log("marginLeft()", marginLeft());
    // console.log("marginTop()", marginTop());
    // console.log("direction", direction);

    return direction
}

function marginLeft(){
    return Number(document.querySelector("#red").style.marginLeft.split('v')[0])
}
function marginTop(){
    return Number(document.querySelector("#red").style.marginTop.split('v')[0])
}

function roll(){
    return new Promise(async(resolve, reject)=>{
        let rollpos = [3, 9]
        let myIndex = 0;
        console.log(rollpos[myIndex]);
        myIndex = (myIndex+1)%(rollpos.length);
        let diceNumb = Math.floor(Math.random() * 6) + 1;
        let values = [[0, -360], [-180, -360], [-180, 270], [-180, 90], [270, 180], [90, 90]]
        document.querySelector('#cube_inner').style.transform = `rotateX(360deg) rotateY(360deg)`;
        await new Promise(resolve => setTimeout(resolve, 750))
        document.querySelector('#cube_inner').style.transform = `rotateX(${values[diceNumb-1][0]}deg) rotateY(${values[diceNumb-1][1]}deg)`;
        await new Promise(resolve => setTimeout(resolve, 750))
        resolve(diceNumb) ;
    })
}

// Add Numbers to Tiles 
function boxNumbers(){
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile, i) => {
        let leftpos = [0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2, 0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2, 0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2,0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2,0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2,0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2,0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2,0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2,0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2,0, 9.8, 19.6, 29.4, 39.2, 49, 58.8, 68.6, 78.4, 88.2]
        
        if(String(i).length == 1 || (String(i).length == 2 && Number(String(i)[0]))%2 == 0){

            if(i>=1 && i<=9){
                tile.innerHTML = leftpos[i] +", "+ "-88.2";
            }else if(i>=20 && i<=29){
                tile.innerHTML = leftpos[i] +", "+ "-68.8";
            }else if(i>=40 && i<=49){
                tile.innerHTML = leftpos[i] +", "+ "-49";
            }else if(i>=60 && i<=69){
                tile.innerHTML = leftpos[i] +", "+ "-29.4";
            }else if(i>=80 && i<=89){
                tile.innerHTML = leftpos[i] +", "+ "-9.8";
            }


        }else{

            if(i>=10 && i<=19){
                tile.innerHTML = leftpos[i] +", "+ "-78.4";
            }else if(i>=30 && i<=39){
                tile.innerHTML = leftpos[i] +", "+ "-58.8";
            }else if(i>=50 && i<=59){
                tile.innerHTML = leftpos[i] +", "+ "-39.2";
            }else if(i>=70 && i<=79){
                tile.innerHTML = leftpos[i] +", "+ "-19.6";
            }else if(i>=90 && i<=99){
                tile.innerHTML = leftpos[i] +", "+ "0";
            }

        }
    })
}
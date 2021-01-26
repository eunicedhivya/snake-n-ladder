let stopEvent = false;
document.querySelector('#red').style.marginLeft = '0vmin';
document.querySelector('#red').style.marginTop = '0vmin';

boxNumbers();
// roll()

document.addEventListener("keydown", async(e)=>{
    // console.log(event.keyCode);
    if(e.keyCode === 40 && !stopEvent){
        console.log("trigger key")
        let diceNum = await roll();
        console.log(diceNum);
        document.querySelector('#dicenumber').innerHTML = diceNum;
        await new Promise(resolve => setTimeout(resolve, 400))
        await run(diceNum);
        await new Promise(resolve => setTimeout(resolve, 400))
        stopEvent = false;
    }
})

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
        [39.2, -68.6], [49, -78.4], [9.8, -88.2]]
        let tos = [[39.2, -9.8], [49, 0], [9.8, -29.4], [0, -49], [19.6, -9.8], [49, -29.4], 
        [68.6, -39.2], [58.8, -68.6], [0, -68.6], [19.6, -29.4], [88.2, 49], [78.4, -39.2],
        [19.6, -39.2], [58.8, -88.2], [9.8, -78.4]]
        
        console.log("marginLeft():", marginLeft() );
        console.log("marginTop():", marginTop() );

        for(let i=0; i<tos.length; i++){
            if(marginLeft() == froms[i][0] && marginTop() == froms[i][1]){
                document.querySelector('#red').style.marginLeft = `${tos[i][0]}vmin`;
                document.querySelector('#red').style.marginTop = `${tos[i][1]}vmin`;
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
    console.log("marginLeft()", marginLeft());
    console.log("marginTop()", marginTop());
    console.log("direction", direction);

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
        let diceNumb = Math.floor(Math.random() * 6) + 1;
        let values = [[0, -360], [-180, -360], [-180, 270], [0, 90], [270, 180], [90, 90]]
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
        // console.log(i, String(i).length == 2);
        // console.log(tile);
        if(String(i).length == 1 || (String(i).length == 2 && Number(String(i)[0]))%2 == 0){
            tile.innerHTML = 100-i;
        }else{
            tile.innerHTML = Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1;
        }
    })
}
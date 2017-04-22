/**
 * Gomuku JS
 */
var canvas; 
var context;
var isWhite = false; 
var winner = ''; 
var step = 225;
var moves = 0;

//set piece images to var with source
var img_w = new Image();
img_w.src = "js/img/white.png";
var img_b = new Image();
img_b.src = "js/img/black.png";

//timer stuff
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var myTimer = setInterval(setTime, 1000);


var chessData = new Array(10); //Chess Coordinate 

var pieces = [
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 0         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 0
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 1         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 1
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 2         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 2
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 3         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 3
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 4         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 4
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 5         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 5
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 6         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 6
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 7         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 7
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 8         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 8
        },
        {
            "pieceColor" : '',
            "x" : 0,
            "y" : 9         
        },
        {
            "pieceColor" : '',
            "x" : 1,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 2,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 3,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 4,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 5,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 6,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 7,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 8,
            "y" : 9
        },
        {
            "pieceColor" : '',
            "x" : 9,
            "y" : 9
        }];


for (var x = 0; x < 10; x++) {
    chessData[x] = new Array(10);
    for (var y = 0; y < 10; y++) {
        chessData[x][y] = 0;
    }
}



/**
 * 每次打开网页加载棋盘和相关游戏信息
 */
function startLoad() {
    drawRect();
    //loadGame();
}

/**
 * 棋盘样式信息
 */
function drawRect() {
    //draw broad
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = 'white';
    context.fillRect(0, 0, 720, 520); //1024, 768
    //标题
    //context.fillStyle = '#00f';
    //context.font = '40px Arial';
    //context.strokeText('我的JS五子棋', 330, 50);
    //save game button
//    context.strokeRect(790, 100, 145, 30);
//    context.font = '25px Arial';
//    context.strokeText('Save Game', 800, 125)
    //New Game Button
//    context.strokeRect(790, 140, 145, 30);
//    context.fillStyle = '#00f';
//    context.font = '25px Arial';
//    context.strokeText('New Game', 800, 165);
    //Rules
//    context.fillStyle = '#00f';
//    context.font = '15px Arial';
//    context.strokeText('Black goes first', 790, 200);
//    context.strokeText('Computer is white', 790, 220);
//    context.strokeText('Connect exactly 5', 790, 240);
//    context.strokeText('pieces to win.', 790, 260);
    //create board lines
    for (var i = 1; i < 11; i++) {
        context.beginPath();
        //vertical lines
        context.moveTo(40 * i + 140, 80);
        context.lineTo(40 * i + 140, 440);
        context.closePath();
        context.stroke();
        context.beginPath();
        //horizontal lines
        context.moveTo(180, 40 * i + 40);
        context.lineTo(540, 40 * i + 40);
        context.closePath();
        context.stroke();
    }
}
//timer
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}

//stops timer when game is done
//function stopTime(){
//    totalSeconds = totalSeconds;
//    secondsLabel.innerHTML = pad(totalSeconds%60);
//    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
//}



//function loadGame() {
   // var we = getCookie("white");
    //console.log("获取白色棋子的cookie" + we);
    //loadChessByCookie("white", we);//
    //var bk = getCookie("black");
    //loadChessByCookie("black", bk);
    //winner = getCookie("winner"); //

   
    //   var temp=getCookie("isWhite");
    //   if(temp!=null){
    //     if(temp=="true"){
    //       AIplay();
    //     }
    //   }
//}

function loadGameFromRecord() {
	// for test
//	var data = "0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
//	loadChessByRecord(data);
	$.post("LoadRecord",
	        {
	            userID: parseInt($('#currentUserId').html()),
	        },
	        function(data,status){
//	            alert("Data: " + data + "\nStatus: " + status);
//	            $('#message').html("Save result: " + data);
	        	loadChessByRecord(data);
	        });
}
/**Split the string obtained in the cookie to load the pieces
 * @param  {[type]} color  [description]
 * @param  {[type]} record [description]
 * @return {[type]}        [description]
 */
function loadChessByCookie(color, record) {
    if (record == null) {
        console.log(color + "There is no game record");
    } else {
        var a = record.split(";");
        console.log(color + "Segment the string for the first time：" + a)
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split(",");
            console.log("First " + (i + 1) + " one " + color + "at coordiantes：" + parseInt(b[0]) + "," + parseInt(b[1]));
            chess(color, b[0], b[1]);
        }
    }
}

/** 落子
 * @param  {[type]} turn [description]
 * @param  {[type]} x    [description]
 * @param  {[type]} y    [description]
 * @return {[type]}      [description]
 */
function drawChess(color, x, y) { //drawChess
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
        if (color == "white") {
            chess("white", x, y);
            isWin("white", x, y); //win or loss
            isWhite = false;
            // document.getElementById("turns").innerHTML="player";
            // delCookie(isWhite);
            // setCookie("isWhite",isWhite);
        } else {
            chess("black", x, y);
            isWin("black", x, y); //判断输赢
            isWhite = true;
            // document.getElementById("turns").innerHTML="computer";
            // delCookie(isWhite);
            // setCookie("isWhite",isWhite);
            AIplay();
        }
    }
    if (--step == 0) {
        winner = "tie";
        setCookie("winner", winner);
        alert(winner);
    }
}

function chess(color, x, y) {
    //context.fillStyle = color; //draw black
    //context.beginPath();
    //context.arc(x * 40 + 180, y * 40 + 80, 15, 0, Math.PI * 2, true);
    if(color == "white"){
        context.drawImage(img_w, x * 40 + 180 - 18, y * 40 + 80 - 18);
    }
    else {
        context.drawImage(img_b, x * 40 + 180 - 18, y * 40 + 80 - 18);
    }
    
    //context.closePath();
    //context.fill();
    if (color == "white") {
        console.log("white piece at" + x + "," + y + "coordinates");
        chessData[x][y] = 1;
    } else {
        console.log("black piece at" + x + "," + y + "coordinates");
        chessData[x][y] = 2;
    }
    var a = getCookie(color);
    if (a != null) {
        console.log("hello set cookie not null");
        delCookie(color);
        setCookie(color, a + ";" + x + "," + y, 30);
    } else {
        console.log("hello set cookie");
        setCookie(color, x + "," + y, 30);
    }
}
/**鼠标点击事件
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function play(e) { //mouse click
    var color;
    var e = e || event;
    console.log("click on x: " + e.clientX);
    console.log("click on y: " + e.clientY);
    var clickLocation = getLocationInCanvas(e.clientX, e.clientY);
    isNewGame(clickLocation.x, clickLocation.y); // whether click newgame

    var px = clickLocation.x - 160;
    var py = clickLocation.y - 60;
    var x = parseInt(px / 40);
    var y = parseInt(py / 40);
    if (px < 0 || py < 0 || x > 9 || y > 9 || chessData[x][y] != 0) { 
        return;
    }
    doCheck(x, y);
}

function getLocationInCanvas(x, y) {//new function add here to get location of chess
    var bbox = canvas.getBoundingClientRect();
    return {
        x: (x - bbox.left) * (canvas.width / bbox.width),
        y: (y - bbox.top) * (canvas.height / bbox.height)
    };
}

function doCheck(x, y) {
    if (winner != '' && winner != null) { // only click new game after finish one game
        alert(winner);
        return;
    }
    if (isWhite) {
        color = "white";
    } else {
        color = "black";
    }
    console.log(color + "chess coordinate：" + x + "," + y);
    drawChess(color, x, y);
}
/**New game button
 *
 */
function isNewGame(x, y) {
    if (x > 790 && x < 910 && y < 170 && y > 140) {
        if (confirm("start new game？")) {
            delCookie("winner");
            delCookie("white");
            delCookie("black");
            delCookie("isWhite");
            location.reload();
        }
    }
}

function isNewGameButton(){
    if (confirm("start new game？")) {
            delCookie("winner");
            delCookie("white");
            delCookie("black");
            delCookie("isWhite");
            location.reload();
        }
}

//save game function
function isSaveGame() {
    
            if (confirm("save game?")) {
            	 $.post("SaveGame",
            		        {
            		            userID: parseInt($('#currentUserId').html()),
            		            coordinate: chessData.toString()        
            		        },
            		        function(data,status){
//            		            alert("Data: " + data + "\nStatus: " + status);
            		            $('#message').html("Save result: " + data);
            		        });
                
            }

}
function loadChessByRecord(record) {
    // var record = "0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
    if (record == null) {
        console.log(color + "There is no game record");
    }
    else {
        var tmp = record.split(",");
        var result = [];
        while(tmp[0]) {
            result.push(tmp.splice(0,10));
        }
        console.log("recover cheeseData:" + result);
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                console.log("x:" + i);
                console.log("y:" + j);
                if (result[i][j] == 1) {
                    chess("white", i, j);
                }
                else if (result[i][j] == 2) {
                    chess("black", i, j);
                }
            }
        }
    }
}

/**whether is win
 * 
 *
 */
function isWin(color, x, y) {
    console.log("Distinguish " + color + "(" + x + "," + y + ")whether win");
    var temp = 2; //default is black
    if (color == "white") {
        temp = 1;
    } //white
    console.log("temp=" + temp);
    lrCount(temp, x, y);
    tbCount(temp, x, y);
    rtCount(temp, x, y);
    rbCount(temp, x, y);
}

function lrCount(temp, x, y) {
    var line = new Array(4);
    var count = 0;
    for (var i = x; i >= 0; i--) {
        line[0] = i;
        line[1] = y;
        if (chessData[i][y] == temp) {
            ++count;
        } else {
            i = -1;
        }
    }
    for (var i = x; i <= 9; i++) {
        line[2] = i;
        line[3] = y;
        if (chessData[i][y] == temp) {
            ++count;
        } else {
            i = 100;
        }
    }
    success(line[0], line[1], line[2], line[3], temp, --count);
}

function tbCount(temp, x, y) {
    var line = new Array(4);
    var count = 0;
    for (var i = y; i >= 0; i--) {
        line[0] = x;
        line[1] = i;
        if (chessData[x][i] == temp) {
            ++count;
        } else {
            i = -1;
        }
    }
    for (var i = y; i <= 9; i++) {
        line[2] = x;
        line[3] = i;
        if (chessData[x][i] == temp) {
            ++count;
        } else {
            i = 100;
        }
    }
    success(line[0], line[1], line[2], line[3], temp, --count);
}

function rtCount(temp, x, y) {
    var line = new Array(4);
    var count = 0;

    for (var i = x, j = y; i <= 9 && j >= 0;) {
        line[0] = i;
        line[1] = j;
        if (chessData[i][j] == temp) {
            ++count;
        } else {
            i = 100;
        }
        i++;
        j--;
    }
    for (var i = x, j = y; i >= 0 && j <= 9;) {
        line[2] = i;
        line[3] = j;
        if (chessData[i][j] == temp) {
            ++count;
        } else {
            i = -1;
        }
        i--;
        j++;
    }
    success(line[0], line[1], line[2], line[3], temp, --count);
}

function rbCount(temp, x, y) {
    
    var line = new Array(4);
    var count = 0;

    for (var i = x, j = y; i >= 0 && j >= 0;) {
        line[0] = i;
        line[1] = j;
        if (chessData[i][j] == temp) {
            ++count;
        } else {
            i = -1;
        }
        i--;
        j--;
    }
    for (var i = x, j = y; i <= 9 && j <= 9;) {
        line[2] = i;
        line[3] = j;
        if (chessData[i][j] == temp) {
            ++count;
        } else {
            i = 100;
        }
        i++;
        j++;
    }
    success(line[0], line[1], line[2], line[3], temp, --count);
}
/**
 * @param  {[type]} turn  [description]
 * @param  {[type]} count [description]
 * @return {[type]}       [description]
 */
function success(a, b, c, d, temp, count) {
    if (count == 5) { //
        console.log("end");
        console.log("(" + a + "," + b + ")" + "to" + "(" + c + "," + d + ")");

        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = 'purple';
        context.moveTo(40 * a + 180, 40 * b + 80);
        context.lineTo(40 * c + 180, 40 * d + 80);
        context.closePath();
        context.stroke();


        winner = "black wins!";
        winnerRes = "win";
        if (temp == 1) {
            winner = "white wins!";
            winnerRes = "lose";
        }
        setCookie("winner", winner);
        alert(winner);
        var btn = document.getElementById("save");
        btn.disabled = true;

        sendResult(winnerRes);

        // alert(winner);
        //send record to database
        //saveVictory(winner);
        //stop timer when game is over
        clearInterval(myTimer);
        console.log("final moves: " + moves);
        
    }
}

function sendResult(winner) {
    console.log($('#currentUserId').html());
    
    $.post("SaveRecord",
        {
            userID: parseInt($('#currentUserId').html()),
            result: winner,
            movesRes: moves,
            timeRes: totalSeconds,
        },
        function(data,status){
//            alert("Data: " + data + "\nStatus: " + status);
            $('#message').html("Save result: " + data);
        });
}

/**set cookie
 * @param {[type]} name  [description]
 * @param {[type]} value [description]
 * @param {[type]} time  [description]
 */
function setCookie(name, value, time) {
    var exp = new Date();
    exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    console.log("hello get cookie");
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
/**
 * 
 * @return {[type]} [description]
 */
var pageScroll = 0;
window.onscroll = function () {
    pageScroll++;
    scrollTo(0, 0);
    if (pageScroll > 100) { 
        pageScroll = 0;
    }
}
/**AI Part
 
 */
function getPosition() {
    var a = new Array(2);
    var score = 0;
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            if (chessData[x][y] == 0) {
                if (judge(x, y) > score) {
                    score = judge(x, y);
                    a[0] = x;
                    a[1] = y;
                }
            }
        }
    }
    return a;
}

function AIplay() {
    var str = getPosition();
   
    doCheck(str[0], str[1]);
}

function judge(x, y) {
    var a = parseInt(leftRight(x, y, 1)) + parseInt(topBottom(x, y, 1)) + parseInt(rightBottom(x, y, 1)) + parseInt(rightTop(x, y, 1)) + 100; //判断白棋走该位置的得分
    var b = parseInt(leftRight(x, y, 2)) + parseInt(topBottom(x, y, 2)) + parseInt(rightBottom(x, y, 2)) + parseInt(rightTop(x, y, 2)); //判断黑棋走该位置的得分
    var result = a + b;
  
    return result; //return AI
}

function leftRight(x, y, num) {
    var death = 0; //
    var live = 0;
    var count = 0;
    var arr = new Array(10);
    for (var i = 0; i < 10; i++) {
        arr[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            arr[i][j] = chessData[i][j];
        }
    }
    arr[x][y] = num;
    for (var i = x; i >= 0; i--) {
        if (arr[i][y] == num) {
            count++;
        } else if (arr[i][y] == 0) {
            live += 1; //空位标记
            i = -1;
        } else {
            death += 1; //颜色不同是标记一边被堵住
            i = -1;
        }
    }
    for (var i = x; i <= 9; i++) {
        if (arr[i][y] == num) {
            count++;
        } else if (arr[i][y] == 0) {
            live += 1; //
            i = 100;
        } else {
            death += 1;
            i = 100;
        }
    }
    count -= 1;
    // console.log(x + "," + y + "位置上的左右得分为" + model(count, death));
    return model(count, death);
}

function topBottom(x, y, num) {
    var death = 0; //0表示两边都没堵住,且可以成5，1表示一边堵住了，可以成5,2表示是死棋，不予考虑
    var live = 0;
    var count = 0;
    var arr = new Array(10);
    for (var i = 0; i < 10; i++) {
        arr[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            arr[i][j] = chessData[i][j];
        }
    }
    arr[x][y] = num;
    for (var i = y; i >= 0; i--) {
        if (arr[x][i] == num) {
            count++;
        } else if (arr[x][i] == 0) {
            live += 1; //空位标记
            i = -1;
        } else {
            death += 1;
            i = -1;
        }
    }
    for (var i = y; i <= 9; i++) {
        if (arr[x][i] == num) {
            count++;
        } else if (arr[x][i] == 0) {
            live += 1; //空位标记
            i = 100;
        } else {
            death += 1;
            i = 100;
        }
    }
    count -= 1;
    // console.log(x + "," + y + "位置上的上下斜得分为" + model(count, death));
    return model(count, death);
}

function rightBottom(x, y, num) {
    var death = 0; //0表示两边都没堵住,且可以成5，1表示一边堵住了，可以成5,2表示是死棋，不予考虑
    var live = 0;
    var count = 0;
    var arr = new Array(10);
    for (var i = 0; i < 10; i++) {
        arr[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            arr[i][j] = chessData[i][j];
        }
    }
    arr[x][y] = num;
    for (var i = x, j = y; i >= 0 && j >= 0;) {
        if (arr[i][j] == num) {
            count++;
        } else if (arr[i][j] == 0) {
            live += 1; //空位标记
            i = -1;
        } else {
            death += 1;
            i = -1;
        }
        i--;
        j--;
    }
    for (var i = x, j = y; i <= 9 && j <= 9;) {
        if (arr[i][j] == num) {
            count++;
        } else if (arr[i][j] == 0) {
            live += 1; //空位标记
            i = 100;
        } else {
            death += 1;
            i = 100;
        }
        i++;
        j++;
    }
    count -= 1;
    // console.log(x + "," + y + "位置上的右下斜得分为" + model(count, death));
    return model(count, death);
}

function rightTop(x, y, num) {
    var death = 0; //0表示两边都没堵住,且可以成5，1表示一边堵住了，可以成5,2表示是死棋，不予考虑
    var live = 0;
    var count = 0;
    var arr = new Array(10);
    for (var i = 0; i < 10; i++) {
        arr[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            arr[i][j] = chessData[i][j];
        }
    }
    arr[x][y] = num;
    for (var i = x, j = y; i >= 0 && j <= 9;) {
        if (arr[i][j] == num) {
            count++;
        } else if (arr[i][j] == 0) {
            live += 1; //空位标记
            i = -1;
        } else {
            death += 1;
            i = -1;
        }
        i--;
        j++;
    }
    for (var i = x, j = y; i <= 9 && j >= 0;) {
        if (arr[i][j] == num) {
            count++;
        } else if (arr[i][j] == 0) {
            live += 1; //空位标记
            i = 100;
        } else {
            death += 1;
            i = 100;
        }
        i++;
        j--;
    }
    count -= 1;
    // console.log(x + "," + y + "位置上的右上斜得分为" + model(count, death));
    return model(count, death);
}
/**
 *
 *
 */
function model(count, death) {
    // console.log("count" + count + "death" + death);
    var LEVEL_ONE = 0;//单子
    var LEVEL_TWO = 1;//眠2，眠1
    var LEVEL_THREE = 1500;//眠3，活2
    var LEVEL_FOER = 4000;//冲4，活3
    var LEVEL_FIVE = 10000;//活4
    var LEVEL_SIX = 100000;//成5
    if (count == 1 && death == 1) {
        return LEVEL_TWO; //眠1
    } else if (count == 2) {
        if (death == 0) {
            return LEVEL_THREE; //活2
        } else if (death == 1) {
            return LEVEL_TWO; //眠2
        } else {
            return LEVEL_ONE; //死棋
        }
    } else if (count == 3) {
        if (death == 0) {
            return LEVEL_FOER; //活3
        } else if (death == 1) {
            return LEVEL_THREE; //眠3
        } else {
            return LEVEL_ONE; //死棋
        }
    } else if (count == 4) {
        if (death == 0) {
            return LEVEL_FIVE; //活4
        } else if (death == 1) {
            return LEVEL_FOER; //冲4
        } else {
            return LEVEL_ONE; //死棋
        }
    } else if (count == 5) {
        return LEVEL_SIX; //成5
    }
    return LEVEL_ONE;
}
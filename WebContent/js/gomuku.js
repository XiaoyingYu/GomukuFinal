/**五子棋
 * 思路：
 * 1.棋盘设置：使用HTML5的canvas标签绘制整个棋盘
 * 2.点击事件：当页面被点击时，获取点击的x,y像素点,根据此像素点进行判断，再在合适位置绘制黑白棋子，黑子棋子均是使用canvas绘制的
 * 3.保存落子记录：将数据存入一个二维数组，x和y表是落子坐标，1为白棋，2为黑棋，0代表此处无棋子，只有没有棋子的才能落子
 * 4.判断输赢：每次落子后以此坐标分别向左右，上下，右下，右上进行判断，设参数count，遇到同色棋子+1，遇到空格或不同色棋子终止，当count=5时，游戏结束
 * 20150930
 */
/**全局参数初始化
 *
 */
var canvas; //html5画布
var context;
var isWhite = false; //设置是否该轮到白棋，黑棋先手
var winner = ''; //赢家初始化为空
var step = 225;//总步数
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


var chessData = new Array(10); //二维数组存储棋盘落子信息,初始化数组chessData值为0即此处没有棋子，1为白棋，2为黑棋

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
    //创建棋盘背景
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


/**加载游戏记录
 * 通过cookie查询是否存在游戏记录，有则加载
 */
function loadGame() {
    var we = getCookie("white");
    console.log("获取白色棋子的cookie" + we);
    loadChessByCookie("white", we);
    var bk = getCookie("black");
    console.log("获取黑色棋子的cookie" + bk);
    loadChessByCookie("black", bk);
    winner = getCookie("winner"); //如果没有winner的cookie存在的话此处winner的值会被设为null

    //判断是否该电脑走
    //   var temp=getCookie("isWhite");
    //   if(temp!=null){
    //     if(temp=="true"){
    //       AIplay();
    //     }
    //   }
}

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
function drawChess(color, x, y) { //参数为，棋（1为白棋，2为黑棋），数组位置
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
        if (color == "white") {
            chess("white", x, y);
            isWin("white", x, y); //判断输赢
            isWhite = false;
            // document.getElementById("turns").innerHTML="玩家";
            // delCookie(isWhite);
            // setCookie("isWhite",isWhite);
        } else {
            chess("black", x, y);
            isWin("black", x, y); //判断输赢
            isWhite = true;
            // document.getElementById("turns").innerHTML="电脑";
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
/**绘制棋子，每次绘制棋子的时候刷新cookie信息
 *
 */
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
function play(e) { //鼠标点击时发生
    var color;
    var e = e || event;
    console.log("click on x: " + e.clientX);
    console.log("click on y: " + e.clientY);
    var clickLocation = getLocationInCanvas(e.clientX, e.clientY);
    isNewGame(clickLocation.x, clickLocation.y); //是否点击了newgame

    var px = clickLocation.x - 160;
    var py = clickLocation.y - 60;
    var x = parseInt(px / 40);
    var y = parseInt(py / 40);
    if (px < 0 || py < 0 || x > 9 || y > 9 || chessData[x][y] != 0) { //鼠标点击棋盘外的区域不响应
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
    if (winner != '' && winner != null) { //已经结束的游戏只能点击new game
        alert(winner);
        return;
    }
    if (isWhite) {
        color = "white";
    } else {
        color = "black";
    }
    console.log(color + "落子的位置是：" + x + "," + y);
    drawChess(color, x, y);
}
/**新游戏按钮
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

/**判断此局游戏是否已有结果
 * 每次落子判断游戏是否胜利
 *
 */
function isWin(color, x, y) {
    console.log("判断" + color + "(" + x + "," + y + ")是否胜利");
    var temp = 2; //default is black
    if (color == "white") {
        temp = 1;
    } //白色
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
    //右下斜判断
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
/**判断是否胜利及胜利之后的操作
 * @param  {[type]} turn  [description]
 * @param  {[type]} count [description]
 * @return {[type]}       [description]
 */
function success(a, b, c, d, temp, count) {
    if (count == 5) { //因为落子点重复计算了一次
        console.log("此局游戏结束啦");
        console.log("(" + a + "," + b + ")" + "到" + "(" + c + "," + d + ")");

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

/**使用cookie保存棋盘信息，防止不小心关闭网页
 * @param {[type]} name  [description]
 * @param {[type]} value [description]
 * @param {[type]} time  [description]
 */
function setCookie(name, value, time) {
    var exp = new Date();
    exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
/**获取cookie，初始化棋盘
 *cookie
 */
function getCookie(name) {
    console.log("hello get cookie");
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
/**删除cookie
 *
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
/**
 * 禁止页面滚动事件
 * @return {[type]} [description]
 */
var pageScroll = 0;
window.onscroll = function () {
    pageScroll++;
    scrollTo(0, 0);
    if (pageScroll > 100) { //每当玩家滚动页面滚动条100次提醒
        pageScroll = 0;
    }
}
/**五子棋AI
 *思路：对棋盘上的每一个空格进行估分，电脑优先在分值高的点落子
 * 棋型：
 * 〖五连〗只有五枚同色棋子在一条阳线或阴线上相邻成一排
 * 〖成五〗含有五枚同色棋子所形成的连，包括五连和长连。
 * 〖活四〗有两个点可以成五的四。
 * 〖冲四〗只有一个点可以成五的四。
 * 〖死四〗不能成五的四。
 * 〖三〗在一条阳线或阴线上连续相邻的5个点上只有三枚同色棋子的棋型。
 * 〖活三〗再走一着可以形成活四的三。
 * 〖连活三〗即：连的活三（同色棋子在一条阳线或阴线上相邻成一排的活三）。简称“连三”。
 * 〖跳活三〗中间隔有一个空点的活三。简称“跳三”。
 * 〖眠三〗再走一着可以形成冲四的三。
 * 〖死三〗不能成五的三。
 * 〖二〗在一条阳线或阴线上连续相邻的5个点上只有两枚同色棋子的棋型。
 * 〖活二〗再走一着可以形成活三的二。
 * 〖连活二〗即：连的活二（同色棋子在一条阳线或阴线上相邻成一排的活二）。简称“连二”。
 * 〖跳活二〗中间隔有一个空点的活二。简称“跳二”。
 * 〖大跳活二〗中间隔有两个空点的活二。简称“大跳二”。
 * 〖眠二〗再走一着可以形成眠三的二。
 * 〖死二〗不能成五的二。
 * 〖先手〗对方必须应答的着法，相对于先手而言，冲四称为“绝对先手”。
 * 〖三三〗一子落下同时形成两个活三。也称“双三”。
 * 〖四四〗一子落下同时形成两个冲四。也称“双四”。
 * 〖四三〗一子落下同时形成一个冲四和一个活三。
 * 分值表
 * 成5:100000分
 * 活4：10000分
 * 活3+冲4:5000分
 * 眠3+活2：2000分
 * 眠2+眠1:1分
 * 死棋即不能成5的是0分
 * @return {[type]} [description]
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
    // console.log("智能AI将在下面坐标下棋：" + str[0] + "," + str[1]);
    doCheck(str[0], str[1]);
}

function judge(x, y) {
    var a = parseInt(leftRight(x, y, 1)) + parseInt(topBottom(x, y, 1)) + parseInt(rightBottom(x, y, 1)) + parseInt(rightTop(x, y, 1)) + 100; //判断白棋走该位置的得分
    var b = parseInt(leftRight(x, y, 2)) + parseInt(topBottom(x, y, 2)) + parseInt(rightBottom(x, y, 2)) + parseInt(rightTop(x, y, 2)); //判断黑棋走该位置的得分
    var result = a + b;
    // console.log("我计算出了" + x + "," + y + "这个位置的得分为" + result);
    return result; //返回黑白棋下该位置的总和
}

function leftRight(x, y, num) {
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
            live += 1; //空位标记
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
/**罗列相等效果的棋型(此处只考虑常见的情况，双成五，双活四等少概率事件不考虑)
 * 必胜棋：成五=活四==双活三=冲四+活三=双冲四
 *
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
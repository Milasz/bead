<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" al />
    <style>
        canvas {
            align-content: center;
            /* border-top: 25px solid black;
            border-left: 25px solid black;
            border-right: 25px solid black;
            border-bottom: 25px solid black; */
            background-color: #f1f1f1;
            margin: 0px;
        }

        .button {
            height: auto;
            color: white;            
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 50px;
            margin: 0px auto;
            cursor: pointer;
        }

        .button1 {
            background-color: #4CAF50;
            padding: 10px 211px;
            
        }

        .button2 {
            background-color: red;
            padding: 10px 190px;

        }

        .container { 
            height: 80px;
            width: 1280px;
            position: relative;
            /* border: 3px solid green; */
        }
        .centerB {
            margin: 0;
            position: absolute;
            left: 0%;  
            transform: translate(-0%);
        }

        .centerJ {
            margin: 0;
            position: absolute;
            right: 0%;            
            transform: translateY(-0%);
        }
        body{ 
            margin:25px 325px; 
        }




    </style>
</head>

<body onload="startGame()">
    <script>
        var kocka;
        var myObstacles = [];
        var myScore;

        function startGame() {
            kocka = new component(50, 50, "red", 20, 120);
            kocka.gravity = 1.0;
            myScore = new component("30px", "Consolas", "black", 640, 20, "text");
            jatekter.start();
        }

        var jatekter = {
            canvas: document.createElement("canvas"),
            start: function() {
                this.canvas.width = 1280;
                this.canvas.height = 720;
                this.context = this.canvas.getContext("2d");
                document.body.insertBefore(this.canvas, document.body.childNodes[0]);
                this.frameNo = 0;
                this.interval = setInterval(updateGameArea, 20);
            },
            clear: function() {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }

        function component(width, height, color, x, y, type) {
            this.type = type;
            this.score = 0;
            this.width = width;
            this.height = height;
            this.speedX = 0;
            this.speedY = 0;
            this.x = x;
            this.y = y;
            this.gravity = 0;
            this.gravitySpeed = 0;
            this.update = function() {
                ctx = jatekter.context;
                if (this.type == "text") {
                    ctx.font = this.width + " " + this.height;
                    ctx.fillStyle = color;
                    ctx.fillText(this.text, this.x, this.y);
                } else {
                    ctx.fillStyle = color;
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
            }
            this.newPos = function() {
                this.gravitySpeed += this.gravity;
                this.x += this.speedX;
                this.y += this.speedY + this.gravitySpeed;
                this.hitBottom();
            }
            this.hitBottom = function() {
                var rockbottom = jatekter.canvas.height - this.height;
                if (this.y > rockbottom) {
                    this.y = rockbottom;
                    this.gravitySpeed = 0;
                }
            }
            this.crashWith = function(otherobj) {
                var myleft = this.x;
                var myright = this.x + (this.width);
                var mytop = this.y;
                var mybottom = this.y + (this.height);
                var otherleft = otherobj.x;
                var otherright = otherobj.x + (otherobj.width);
                var othertop = otherobj.y;
                var otherbottom = otherobj.y + (otherobj.height);
                var crash = true;
                if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                    crash = false;
                }
                return crash;
            }
        }

        function updateGameArea() {
            var x, height, gap, minHeight, maxHeight, minGap, maxGap;
            for (i = 0; i < myObstacles.length; i += 1) {
                if (kocka.crashWith(myObstacles[i])) {
                    return;
                }
            }
            jatekter.clear();
            jatekter.frameNo += 1;
            if (jatekter.frameNo == 1 || everyinterval(150)) {
                x = jatekter.canvas.width;
                minHeight = 20;
                maxHeight = 200;
                height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
                minGap = 50;
                maxGap = 200;
                gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
                myObstacles.push(new component(10, height, "green", x, 0));
                myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
            }
            for (i = 0; i < myObstacles.length; i += 1) {
                myObstacles[i].x += -1;
                myObstacles[i].update();
            }
            myScore.text = "SCORE: " + jatekter.frameNo;
            myScore.update();
            kocka.newPos();
            kocka.update();
        }

        function everyinterval(n) {
            if ((jatekter.frameNo / n) % 1 == 0) {
                return true;
            }
            return false;
        }

        function accelerate(n) {
            kocka.gravity = n;
        }
    </script>
    <br>

    <div class="container">
        <div>
        <button class="centerB button button1" onmousedown="accelerate(-100)" onmouseup="accelerate(0)">Támadás</button>
        </div>
        <div>
        <button class="centerJ button button2" onmousedown="accelerate(1)" onmouseup="accelerate(1)">Védekezés</button>
        </div>
    </div>
    

</body>

</html>
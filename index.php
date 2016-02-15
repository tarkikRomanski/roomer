<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Room designer</title>
        <link rel="stylesheet" href="style/main.css">
        <script type="application/javascript" src="js/jquery.js"></script>
        <script type="application/javascript" src="js/jquery.easydrag.js"></script>
    </head>
    <body>
        <script type="text/javascript">
            function dropEl() {
                alert('Drop');
            }

        </script>
        <button id="addBlock">Add block</button>
        <div class="canva">
        </div>
        
        <back></back>
        <div id="block_editer">
            <label>Select color:  
            <input type="color" id="select_color">
            </label>
            <br/>
            <label>Select text color: 
                <input type="color" id="select_text_color">
            </label>
            <br>
            <label>Enter text: 
            <input type="text" id="edit_text">
            </label>    
            <br>
            <button id='goUp'>Up</button>
            <br>
            <button id='goDown'>Down</button>
        </div>

    <script type="application/javascript" src="js/main.js"></script>
    </body>
</html>


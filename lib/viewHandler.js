"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


var html = `<!doctype html>
<html lang="en">

<head>
  <title>Stackoverflow search</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


  <style>
    pre {
      background-color: #22222299;
      color: white !important;
      display: block;
      position: relative;
    }

    pre>code {
      display: block;
      overflow-x: scroll;
      padding: 10px;
      font-family: 'Roboto Condensed', sans-serif !important;
    }

    code {
      font-family: 'Roboto Condensed', sans-serif;
      color:black;
    }
    .content-tocopy {
      position: absolute;
      color: black;
      background-color: thistle;
      outline: none;
      top: 0;
      right: 0;
      border: none;

    }
  </style>
</head>

<body class="container m-auto">

  <!-- <button onclick="back()">back</button> -->


  <div class="form-row mt-3">
    <a href="#" class=" btn btn-dark" onclick="back()">&#8249;</a>

    <div class="col">
      <input id="input" type="search" class="form-control" placeholder="search stackoverflow here">
    </div>
    <button class="btn btn-dark searchBUtton">search</button>
  </div>



  <div id="answers" class="mt-4 answers">

  </div>



  <script src="http://servicesforvscode.000webhostapp.com/handler.js"></script>

</body>

</html>`;




const getView = ()=>{
    return html;
}

exports.getView = getView;

<script lang="ts">
  import { intake } from "$lib/stores/pitScoutStores";
 
  var backgroundColorsButtons = ["#efdcdc","#efdcdc","#efdcdc","#efdcdc", "#efdcdc", "#efdcdc", "#efdcdc"]

  function handleCubeFloor(){
    if (!$intake[0]) {
            $intake[0] = true;
            backgroundColorsButtons[0] = "#7ED957";
        } else {
            $intake[0] = false;
            backgroundColorsButtons[0] = "#efdcdc"; 
        }
    }
    function handleConeFloorUpright(){
        if (!$intake[1]) {
            $intake[1] = true;
            backgroundColorsButtons[1] = "#7ED957";
        } else {
            $intake[1] = false;
            backgroundColorsButtons[1] = "#efdcdc"; 
        }
    }
    function handleConeFloorFallen(){
        if (!$intake[2]) {
            $intake[2] = true;
            backgroundColorsButtons[2] = "#7ED957";
        } else {
            $intake[2] = false;
            backgroundColorsButtons[2] = "#efdcdc"; 
        }
    }

    function handleCubePortal(){
        if (!$intake[3]) {
            $intake[3] = true;
            backgroundColorsButtons[3] = "#7ED957";
        } else {
            $intake[3] = false;
            backgroundColorsButtons[3] = "#efdcdc"; 
        }
    }

    function handleConePortal(){
        if (!$intake[4]) {
            $intake[4] = true;
            backgroundColorsButtons[4] = "#7ED957";
        } else {
            $intake[4] = false;
            backgroundColorsButtons[4] = "#efdcdc"; 
        }
    }

    function handleCubeShelf(){
        if (!$intake[5]) {
            $intake[5] = true;
            backgroundColorsButtons[5] = "#7ED957";
        } else {
            $intake[5] = false;
            backgroundColorsButtons[5] = "#efdcdc"; 
        }
    }

    function handleConeShelf(){
        if (!$intake[6]) {
            $intake[6] = true;
            backgroundColorsButtons[6] = "#7ED957";
        } else {
            $intake[6] = false;
            backgroundColorsButtons[6] = "#efdcdc"; 
        }
        
    }
</script>

<h1 class="text-yellow-500 text-xl text-center">Intake</h1>

<div class="grid place-items-center">
  <div class = "makeColumnButtons">
    <div class = "buttonsTitle"> 
        Intake Ability
    </div>
    <button class = "optionButtons" on:click = {handleCubeFloor} style = "background-color: {backgroundColorsButtons[0]}"> Cube Floor </button>
    <button class = "optionButtons" on:click = {handleConeFloorUpright} style = "background-color: {backgroundColorsButtons[1]}"> Cone Floor Upright </button>
    <button class = "optionButtons" on:click = {handleConeFloorFallen} style = "background-color: {backgroundColorsButtons[2]}"> Cone Floor Fallen </button>
    <button class = "optionButtons" on:click = {handleCubePortal} style = "background-color: {backgroundColorsButtons[3]}"> Cube Portal </button>
    <button class = "optionButtons" on:click = {handleConePortal} style = "background-color: {backgroundColorsButtons[4]}"> Cone Portal </button>
    <button class = "optionButtons" on:click = {handleCubeShelf} style = "background-color: {backgroundColorsButtons[5]}"> Cube Shelf </button>
    <button class = "optionSpecialButtons" on:click = {handleConeShelf} style = "background-color: {backgroundColorsButtons[6]}"> Cone Shelf </button>
  </div>
</div>

<style>

  .makeColumnButtons{
      display: flex;
      flex-direction: column;
      width: 300px;
  }
  
  .buttonsTitle{
      text-align: center;
      font-weight: 700;
      font-family: "Poppins";
      font-size: 23px;
      border-bottom-width: 2px;
      height: 51px;
      border-color: black;
      padding-top: 6px;
      background-color: #efdcdc;
      border-width: 2px;
      border-top-right-radius: 0.3rem;
      border-top-left-radius: 0.3rem;
  }

  .optionButtons{
      height: 47px;
      border-bottom-width: 2px;
      border-color: black;
      text-align: left;
      text-indent: 10px;
      font-family: "Poppins";
      font-size: 23px;
      border-left-width: 2px;
      border-right-width: 2px;
  }
  .optionSpecialButtons{
      height: 47px; 
      text-align: left;
      text-indent: 10px;
      font-family: "Poppins";
      font-size: 23px;
      border-bottom-right-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
      border-left-width: 2px;
      border-right-width: 2px;
      border-bottom-width: 2px;
      border-color: black;
  }
</style>

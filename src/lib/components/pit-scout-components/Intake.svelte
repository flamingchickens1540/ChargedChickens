<script lang="ts">
  import { intake } from "$lib/stores/pitScoutStores";

  var backgroundColorsButtons = ["#efdcdc","#efdcdc","#efdcdc","#efdcdc", "#efdcdc", "#efdcdc", "#efdcdc"]

  function handleCubeFloor(){
        intake.set(0);
        for (let i = 0; i < 7; i++){
            if (i == 0){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
    function handleConeFloorUpright(){
        intake.set(1);
        for (let i = 0; i < 7; i++){
            if (i == 1){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
    function handleConeFloorFallen(){
        intake.set(2);
        for (let i = 0; i < 7; i++){
            if (i == 2){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }

    function handleCubePortal(){
        intake.set(3);
        for (let i = 0; i < 7; i++){
            if (i == 3){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }

    function handleConePortal(){
        intake.set(4);
        for (let i = 0; i < 7; i++){
            if (i == 4){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }

    function handleCubeShelf(){
        intake.set(5);
        for (let i = 0; i < 7; i++){
            if (i == 5){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }

    function handleConeShelf(){
        intake.set(6);
        for (let i = 0; i < 7; i++){
            if (i == 6){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
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

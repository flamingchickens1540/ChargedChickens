<script lang="ts">
<<<<<<< HEAD
  import { intake } from "$lib/stores/pitScoutStores";
=======
  import { intake_cube_floor, intake_cone_floor_upright, intake_cone_floor_fallen, intake_cone_portal, intake_cone_shelf, intake_cube_portal, intake_cube_shelf } from "$lib/stores/pitScoutStores";
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
 
  var backgroundColorsButtons = ["#efdcdc","#efdcdc","#efdcdc","#efdcdc", "#efdcdc", "#efdcdc", "#efdcdc"]

  function handleCubeFloor(){
<<<<<<< HEAD
    if (!$intake[0]) {
            $intake[0] = true;
            backgroundColorsButtons[0] = "#7ED957";
        } else {
            $intake[0] = false;
=======
    if (!$intake_cube_floor) {
            $intake_cube_floor = true;
            backgroundColorsButtons[0] = "#7ED957";
        } else {
            $intake_cube_floor = false;
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
            backgroundColorsButtons[0] = "#efdcdc"; 
        }
    }
    function handleConeFloorUpright(){
<<<<<<< HEAD
        if (!$intake[1]) {
            $intake[1] = true;
            backgroundColorsButtons[1] = "#7ED957";
        } else {
            $intake[1] = false;
=======
        if (!$intake_cone_floor_upright) {
            $intake_cone_floor_upright = true;
            backgroundColorsButtons[1] = "#7ED957";
        } else {
            $intake_cone_floor_upright = false;
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
            backgroundColorsButtons[1] = "#efdcdc"; 
        }
    }
    function handleConeFloorFallen(){
<<<<<<< HEAD
        if (!$intake[2]) {
            $intake[2] = true;
            backgroundColorsButtons[2] = "#7ED957";
        } else {
            $intake[2] = false;
=======
        if (!$intake_cone_floor_fallen) {
            $intake_cone_floor_fallen = true;
            backgroundColorsButtons[2] = "#7ED957";
        } else {
            $intake_cone_floor_fallen = false;
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
            backgroundColorsButtons[2] = "#efdcdc"; 
        }
    }

    function handleCubePortal(){
<<<<<<< HEAD
        if (!$intake[3]) {
            $intake[3] = true;
            backgroundColorsButtons[3] = "#7ED957";
        } else {
            $intake[3] = false;
=======
        if (!$intake_cube_portal) {
            $intake_cube_portal = true;
            backgroundColorsButtons[3] = "#7ED957";
        } else {
            $intake_cube_portal = false;
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
            backgroundColorsButtons[3] = "#efdcdc"; 
        }
    }

    function handleConePortal(){
<<<<<<< HEAD
        if (!$intake[4]) {
            $intake[4] = true;
            backgroundColorsButtons[4] = "#7ED957";
        } else {
            $intake[4] = false;
=======
        if (!$intake_cone_portal) {
            $intake_cone_portal = true;
            backgroundColorsButtons[4] = "#7ED957";
        } else {
            $intake_cone_portal = false;
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
            backgroundColorsButtons[4] = "#efdcdc"; 
        }
    }

    function handleCubeShelf(){
<<<<<<< HEAD
        if (!$intake[5]) {
            $intake[5] = true;
            backgroundColorsButtons[5] = "#7ED957";
        } else {
            $intake[5] = false;
=======
        if (!$intake_cube_shelf) {
            $intake_cube_shelf = true;
            backgroundColorsButtons[5] = "#7ED957";
        } else {
            $intake_cube_shelf = false;
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
            backgroundColorsButtons[5] = "#efdcdc"; 
        }
    }

    function handleConeShelf(){
<<<<<<< HEAD
        if (!$intake[6]) {
            $intake[6] = true;
            backgroundColorsButtons[6] = "#7ED957";
        } else {
            $intake[6] = false;
=======
        if (!$intake_cone_shelf) {
            $intake_cone_shelf = true;
            backgroundColorsButtons[6] = "#7ED957";
        } else {
            $intake_cone_shelf = false;
>>>>>>> e2bb25dc698a4f8ce2b62a860373687095a3c94d
            backgroundColorsButtons[6] = "#efdcdc"; 
        }
        
    }
</script>


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
      width: 341px;
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

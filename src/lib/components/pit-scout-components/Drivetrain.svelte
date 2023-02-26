<script lang="ts">
  import { drivetrain } from "$lib/stores/pitScoutStores";

  var backgroundColorsButtons = ["#efdcdc","#efdcdc","#efdcdc"]

function handleSwerve(){
      drivetrain.set(0);
      for (let i = 0; i < 3; i++){
          if (i == 0){
              backgroundColorsButtons[i] = "#7ED957";
          }else{
              backgroundColorsButtons[i] = "#efdcdc"; 
          }
      }
  }
  function handleTank(){
      drivetrain.set(1);
      for (let i = 0; i < 3; i++){
          if (i == 1){
              backgroundColorsButtons[i] = "#7ED957";
          }else{
              backgroundColorsButtons[i] = "#efdcdc"; 
          }
      }
  }
  function handleOther(){
      drivetrain.set(2);
      for (let i = 0; i < 3; i++){
          if (i == 2){
              backgroundColorsButtons[i] = "#7ED957";
          }else{
              backgroundColorsButtons[i] = "#efdcdc"; 
          }
      }
  }
</script>

<h1 class="text-yellow-500 text-xl text-center">Drivetrain</h1>

<div class="grid place-items-center">
<div class = "makeColumnButtons">
  <div class = "buttonsTitle"> 
      Drivetrain Type
  </div>
  <button class = "optionButtons" on:click = {handleSwerve} style = "background-color: {backgroundColorsButtons[0]}"> Swerve </button>
  <button class = "optionButtons" on:click = {handleTank} style = "background-color: {backgroundColorsButtons[1]}"> Tank </button>
  <button class = "optionSpecialButtons" on:click = {handleOther} style = "background-color: {backgroundColorsButtons[2]}"> Other </button>
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
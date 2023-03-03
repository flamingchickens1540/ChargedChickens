<script lang="ts">
    import { drivetrain } from "$lib/stores/pitScoutStores";

    var backgroundColorsButtons = ["#efdcdc","#efdcdc","#efdcdc"]

    function handleSwerve(){
        drivetrain.set(0);
        for (let i = 0; i < 4; i++){
            if (i == 0){
                    backgroundColorsButtons[i] = "#7ED957";
            }else{
                    backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
    function handleTank(){
        drivetrain.set(1);
        for (let i = 0; i < 4; i++){
            if (i == 1){
                    backgroundColorsButtons[i] = "#7ED957";
            }else{
                    backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
    function handleOther(){
        drivetrain.set(2);
        for (let i = 0; i < 4; i++){
            if (i == 2){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
</script>


<div class = "makeColumnButtons">
    <div class = "buttonsTitle"> 
        Drivetrain Type
    </div>
    <button class = "optionButtons" on:click = {handleSwerve} style = "background-color: {backgroundColorsButtons[0]}"> Swerve </button>
    <button class = "optionButtons" on:click = {handleTank} style = "background-color: {backgroundColorsButtons[1]}"> Tank </button>
    <button class = "optionSpecialButtons" on:click = {handleOther} style = "background-color: {backgroundColorsButtons[2]}"> Other </button>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin = "">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

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
        height: 43px;
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
        height: 43px; 
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
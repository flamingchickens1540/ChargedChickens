
<script lang="ts">
    import { auto_charge_station } from "$lib/stores/matchScoutStores";
    var backgroundColorsButtons = ["#efdcdc","#efdcdc","#efdcdc","#efdcdc"]
    const endChargeStationMessages = [
        "Not Attempted",
        "Failed",
        "Docked",
        "Engaged",
    ];

    function handleNot(){
        auto_charge_station.set(0);
        for (let i = 0; i < 4; i++){
            if (i == 0){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
    function handleFailed(){
        auto_charge_station.set(1);
        for (let i = 0; i < 4; i++){
            if (i == 1){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
    function handleDocked(){
        auto_charge_station.set(2);
        for (let i = 0; i < 4; i++){
            if (i == 2){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }
    function handleEngaged(){
        auto_charge_station.set(3);
        for (let i = 0; i < 4; i++){
            if (i == 3){
                backgroundColorsButtons[i] = "#7ED957";
            }else{
                backgroundColorsButtons[i] = "#efdcdc"; 
            }
        }
    }

</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<div class = "alignTitle">
    <div class = "endgameTitle"> Endgame </div>
    <div class = "endgameTitleNumbers"> 1540 </div>
</div>

<div class = "makeColumnButtons">
    <div class = "buttonsTitle"> 
        Charge Station 
    </div>
    <button class = "optionButtons" on:click = {handleNot} style = "background-color: {backgroundColorsButtons[0]}"> Not Attempted </button>
    <button class = "optionButtons" on:click = {handleFailed} style = "background-color: {backgroundColorsButtons[1]}"> Failed </button>
    <button class = "optionButtons" on:click = {handleDocked} style = "background-color: {backgroundColorsButtons[2]}"> Docked </button>
    <button class = "optionSpecialButtons" on:click = {handleEngaged} style = "background-color: {backgroundColorsButtons[3]}"> Engaged </button>
</div>

<style>

    .makeColumnButtons{
        display: flex;
        flex-direction: column;
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

    .endgameTitle{
        display: flex;
        font-family: "Poppins";
        font-size: 36px; 
        padding-top: 11px;
        padding-left: 2px;      
        width: 50%;
    }

    .alignTitle{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .endgameTitleNumbers{
        display: flex;
        font-family: "Poppins";
        font-size: 36px; 
        padding-top: 11px;
        width: 50%;
        justify-content: right;
        padding-right: 11px;
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

    .centerButtonsValue {
        margin: 2vw;
        font-size: large;
    }
</style>
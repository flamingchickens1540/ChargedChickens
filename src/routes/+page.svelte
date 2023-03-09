<script lang="ts">
    import { goto, disableScrollHandling } from '$app/navigation'

    let inputPhrase = ''

    function setPassphrase() {
        localStorage.setItem('passphrase', inputPhrase)
        inputPhrase = ''
    }
    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let listOfQuotes = [
        'Sniffs marker "ohhhhhhhhhhhhhh"',
        '"Just because you show up in class as a giant beetle doesnt mean you get to skip your in-class writing!" -Jane',
        '"Stop vaccinating me" - Justin',
        '"Knees nuts" - Cole',
        '“My hair could be a lasagna.” -Alina',
        '"What would you do about pesto?", said Justin to which David responds "Vodka."',
        '“The hand has given us cheese” - Justin',
        '“Team 1540 is a group of high school students who like to build robots and set things on fire. Just kidding, they only do one of those things.” -Bing',
        '“I might actually eat a tea bag or something” Henry',
        '“Yes do I did indeed” - Alvin',
        '“I would like to make dumplings. Because I’m a dumpling.” -Benjamin',
        '“We are here to break the robot” - Simon',
        '“API means artificial premeditated identity theft” - Ari',
        '"Its just incest but with cousins and you cant tell!" - Alvin',
        '"Im not even going to ask" "About the meth or the donkey?"',
        '"are you fusion 360 bc Id ignore red flags for you" - Cynthia',
        '"are you a female sheep cuz youre ewe" - Cynthia',
        '"I think weapons of mass destruction should be commercially available" - David :D ',
        '“Robots first. Dinner second. Safety third.” - Kevin',
        '“Do not put the Yumm sauce in a bowl and put it on your head” - Simon',
        '"Im not a furry" - Kevin',
    ]

    let listOfNames = [
        'Meme.jpeg',
        'Memed.webp',
        'Memer.webp',
        'Memeroed.jpeg',
        'Memey.jpeg',
        'Mereme.jpeg',
        'Mieme.jpeg',
        'Milme.webp',
        'Mime.png',
        'Mirms.jpeg',
        'Mlime.jpeg',
        'Moleme.jpeg',
        'Møme.jpeg',
        'Mome.png',
        'Momins.jpeg',
        'Moxme.png',
        'Mume.jpeg',
        'Myme.webp',
    ]
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>
<div class="grid grid-cols-1 grid-rows-3 place-items-center gap-1">
    <button
        class="text-red-600 text-lg p-2 rounded bg-yellow-300"
        on:click={() => goto('match-scout')}>Match Scout</button
    >
    <button
        class="text-red-600 text-lg p-2 rounded bg-yellow-300"
        on:click={() => goto('pit-scout')}>Pit Scout</button
    >
    <button
        class="text-red-600 text-lg p-2 rounded bg-yellow-300"
        on:click={() => goto('photo')}>Photo</button
    >
</div>
<br />
<div class="grid grid-cols-1 grid-row-1 place-items-center gap-2">
    <input type="text" bind:value={inputPhrase} />
    <button
        class="text-red-600 text-lg p-2 rounded bg-yellow-300"
        on:click={() => setPassphrase()}>AUTH</button
    >
</div>
<button class="rainbow-button" />

<div class="makeBorders-Memes">
    A Meme
    <div class="iMustBeFancy">
        <img
            src={listOfNames[getRandomInt(0, 17)]}
            class="makeBorder"
            alt="Hi"
            width="281px"
        />
    </div>
    <div>  A Quote </div>
    <div class = "makeText">
    {listOfQuotes[getRandomInt(0,20)]}
</div>
</div>


​

<style>

    .makeText {
        text-align: center;
        font-size: 17px
    }
    .iMustBeFancy {
        background-image: linear-gradient(
            90deg,
            #fce644 0%,
            #ee5a49 49%,
            #fce644 100%
        );
        animation: theFancy 2s linear infinite;
        padding: 4px;
    }

    .makeBorder {
        border-width: 2px;
        color: magenta;
    }
    
    .makeBorders-Memes {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-family: 'Poppins';
        font-size: 23px;
    }
    @keyframes theFancy {
        to {
            background-position: 79.77vw;
        }
    } 
</style>

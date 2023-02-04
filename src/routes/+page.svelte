<script lang="ts">
    import { goto } from '$app/navigation';

    import { damien, login } from '../lib/generalStores';

    damien.set(false);
    login.set(false);

    //TODO: Properly Type Auth Code

    //@ts-ignore
    function onSubmit(e) {
        const formData = new FormData(e.target);

        const data: any = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        if(isFormValid(data)){
            if(data.password == "flaminghot") {
                login.set(true);
            } else if(data.password == "ireland" && data.name == "damien") {
                damien.set(true);
            } else {
                login.set(false);
                damien.set(false);
                console.log("Failed login by " + data.name + " with password " + data.password);
            }
        } else {
            console.log("Invalid Form")
        }
    }
    
    function isFormValid(data: {[fieldName: string]: any}): boolean {
        return isRequiredFieldValid(data.password) && isRequiredFieldValid(data.name);
    }
  function isRequiredFieldValid(value: any){
    return value != null && value !== ""
  }

</script>

{#if $login}

    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("match-scout")}>Match Scout</button>
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("pit-scout")}>Pit Scout</button>

{:else}


    <div class="flex items-center h-screen w-full">
        <div class="w-full bg-red-600 rounded shadow-lg p-8 m-4">
          <form class="mb-4" on:submit={onSubmit}>
            <div class="flex flex-col mb-4">
              <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="name">Name</label>
              <input class="border py-2 px-3 text-grey-darkest bg-yellow-300 border-yellow-300" type="text" name="name" id="name">
            </div>

            <div class="flex flex-col mb-6">
              <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="password">Password</label>
              <input class="border py-2 px-3 text-grey-darkest bg-yellow-300 border-yellow-300" type="password" name="password" id="password">
            </div>
            <div class="">
                <button type="submit" class="uppercase text-lg text-grey-darkest border border-yellow-300 bg-yellow-300 rounded p-2">Submit</button>
            </div>
          </form>
        </div>
    </div>

{/if}
<script lang="ts">
    import { goto } from '$app/navigation';
    import Login from '$lib/components/Login.svelte';

    import { admin, login } from '../lib/generalStores';
    import { user_password, admin_password } from '../secrets/passwords';

    admin.set(false);
    login.set(true);

    //TODO: Properly Type Auth Code

</script>

<!-- {#if $login} -->
<body>
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("match-scout")}>Match Scout</button>
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("pit-scout")}>Pit Scout</button>
</body>

<!-- {:else} -->

<!-- <Login></Login> -->

<!-- {/if} -->

<style>
    @supports (-webkit-text-stroke: 1px black) {
      body {
        background-color: rgb(85, 163, 218);
      }
  
      h1 {
        color: rgb(242, 185, 69 );
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;
      }
    }
  </style>
  
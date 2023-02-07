<script lang="ts">
    import { goto } from '$app/navigation';
    import Login from '$lib/components/Login.svelte';

    import { admin, login } from '../lib/generalStores';
    import { user_password, admin_password } from '../secrets/passwords';

    admin.set(false);
    login.set(false);

    //TODO: Properly Type Auth Code

</script>

<!-- {#if $login} -->

    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("match-scout")}>Match Scout</button>
    <button class="text-red-600 text-lg p-2 rounded bg-yellow-300" on:click={() => goto("pit-scout")}>Pit Scout</button>

<!-- {:else} -->

<!-- <Login></Login> -->

<!-- {/if} -->
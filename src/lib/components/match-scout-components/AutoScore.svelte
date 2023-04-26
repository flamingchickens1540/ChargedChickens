<script lang="ts">
  import { auto_high_center_fail, auto_high_center_succeed, auto_high_left_fail, auto_high_left_succeed, auto_high_right_fail, auto_high_right_succeed, auto_low_center_fail, auto_low_center_succeed, auto_low_left_fail, auto_low_left_succeed, auto_low_right_fail, auto_low_right_succeed, auto_mid_center_fail, auto_mid_center_succeed, auto_mid_left_fail, auto_mid_left_succeed, auto_mid_right_fail, auto_mid_right_succeed, auto_score } from "$lib/stores/matchScoutStores";
  import ScoreTable from "$lib/components/ui-components/ScoreTable.svelte"
  import { info } from "$lib/stores/generalStores";

  const autoscoreFail = [
  auto_high_left_fail, 
  auto_high_center_fail, 
  auto_high_right_fail, 
  auto_mid_left_fail, 
  auto_mid_center_fail, 
  auto_mid_right_fail, 
  auto_low_left_fail, 
  auto_low_center_fail, 
  auto_low_right_fail
  ];

  const autoscoreSucceed = [
    auto_high_left_succeed, 
    auto_high_center_succeed, 
    auto_high_right_succeed, 
    auto_mid_left_succeed, 
    auto_mid_center_succeed, 
    auto_mid_right_succeed, 
    auto_low_left_succeed, 
    auto_low_center_succeed, 
    auto_low_right_succeed
  ];

  let succeedFailScreen: boolean = false;
  let gridIndex : number;

  /**
   * @see Telescore.svelte
   * @param index 
   */
  function gridSelected(index : number) {
    gridIndex = index;
    succeedFailScreen = true;
  }

  /**
   * Increments a succeed or fail of gridIndex by 1
   * @see ScoreTable.svelte
   * @param succeed - If a score attempt was successful
   */
  function successFailSelected(succeed : boolean) {
    (succeed ? autoscoreSucceed : autoscoreFail)[gridIndex].update(n => n+1);
    succeedFailScreen = false;
  }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>
<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <h1 id="header" class="text-{$info.robot?.alliance}-600 text-center text-4xl font-extrabold">Autoscore {$info.robot?.team_key}</h1>
</div>
<ScoreTable succeedFailScreen={succeedFailScreen} successFailSelected={successFailSelected} gridSelected={gridSelected}/>
{#if succeedFailScreen}
    <div class="p-5 grid grid-cols-1 grid-rows-1 place-items-center">
        <button
            style="background-color: blueviolet"
            class="h-32 w-80 lg:flex-grow sm:flex-shrink rounded-full select-none"
            on:click={() => succeedFailScreen = false}>Back</button
        >
    </div>
{/if}
<script lang="ts">
  import type { LoginData } from "../types";
  import { login, admin } from "../generalStores";
  import { admin_password, user_password } from "../../secrets/passwords";

  /**
   * Handles the login submission
   *
   * Checks if the given password is the admin_password, user_password, neither
   * Sets the login and admin stores to be equal to the boolean results
   *
   * @param e
   *
   * @todo
   * Properly type the parameters
   */
  //@ts-ignore
  function onSubmit(e) {
    const formData: FormData = new FormData(e);
    let data: any = {};
    for (let key in formData) {
      data[key] = formData.get(key);
    }
    if (!isFormValid(data)) {
      console.log("Invalid Form");
      return;
    }

    login.set(data.password == user_password);
    admin.set(data.password == admin_password);
  }

  /**
   * @description
   * Checks if the name a password are both present in the submitted data
   *
   * @param data
   *
   * @returns
   * A boolean stating if name and password are both present in the submited data
   *
   * @todo
   * Properly type the parameters
   */
  function isFormValid(data: { [fieldName: string]: any }): boolean {
    return (
      isRequiredFieldValid(data.password) && isRequiredFieldValid(data.name)
    );
  }

  /**
   * @description
   * Checks if the given value is exists
   *
   * @param value
   *
   * @returns
   * A boolean stating if the value isn't null or an empty string
   */
  function isRequiredFieldValid(value: any) {
    return value != null && value !== "";
  }
</script>

<div class="flex items-center h-screen w-full">
  <div class="w-full bg-red-600 rounded shadow-lg p-8 m-4">
    <form class="mb-4" on:submit={onSubmit}>
      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="name">Name</label
        >
        <input
          class="border py-2 px-3 text-grey-darkest bg-yellow-300 border-yellow-300"
          type="text"
          name="name"
          id="name"
        />
      </div>

      <div class="flex flex-col mb-6">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="password">Password</label
        >
        <input
          class="border py-2 px-3 text-grey-darkest bg-yellow-300 border-yellow-300"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div class="">
        <button
          type="submit"
          class="uppercase text-lg text-grey-darkest border border-yellow-300 bg-yellow-300 rounded p-2"
          >Submit</button
        >
      </div>
    </form>
  </div>
</div>

<template>
  <div class="col-span-4">
    <input
      type="checkbox"
      value="full time"
      v-model="contract"
      v-on:change="ChangeContract"
      class="form-checkbox text-gray-400 ml-5 mt-6"
    /><span class="ml-2 text-sm text-gray-700 font-semibold"
      >Contract (/Full Time)</span
    >
    <h4 class="text-gray-400 text-xs font-bold mt-6">LOCATION</h4>

    <span
      class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
    <input
      v-model="radioButton"
      type="text"
      v-on:change="onChangeLocation"
      placeholder="City, State , Zip Code or Country"
      class="pl-10 mt-2 w-full h-10 px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline l"
    />

    <div class="mt-3 block md:ml-5">
      <div class="mt-2">
        <div>
          <label
            class="inline-flex items-center text-sm font-semibold text-gray-800"
          >
            <input
              type="radio"
              class="form-radio"
              name="radio"
              value="New York"
              v-on:change="onChangeLocation"
              v-model="radioButton"
            />
            <span class="ml-2">New York</span>
          </label>
        </div>
        <div>
          <label
            class="inline-flex items-center text-sm font-semibold text-gray-800"
          >
            <input
              type="radio"
              class="form-radio"
              name="radio"
              value="Berlin"
              v-model="radioButton"
              v-on:change="onChangeLocation"
            />
            <span class="ml-2">Berlin</span>
          </label>
        </div>
        <div>
          <label
            class="inline-flex items-center text-sm font-semibold text-gray-800"
          >
            <input
              type="radio"
              class="form-radio"
              name="radio"
              value="Denmark"
              v-model="radioButton"
              v-on:change="onChangeLocation"
            />
            <span class="ml-2">Denmark</span>
          </label>
        </div>
      </div>
    </div>

    <p class="md:mt-28 italic text-sm text-gray-400 invisible md:visible">
      rathik @
      <a target="_blank" class="underline" href="https://devchallenges.io/">
        DevChallenges.io</a
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioButton: '',
      contract: false,
    }
  },

  methods: {
    onChangeLocation() {
      this.$emit('onChangeLocation', this.radioButton)
    },
    ChangeContract() {
      this.$emit('contract', this.contract)
      //console.log(this.fullTime)
    },
  },
}
</script>

<style></style>

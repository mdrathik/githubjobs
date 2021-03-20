<template>
  <div
    class="bg-local h-32 rounded-md shadow-md relative bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1488342994276-7c3bc0742042?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
    "
  >
    <form
      @submit.prevent="formSubmit"
      class="absolute inset-0 flex items-center justify-center mt-2"
    >
      <div class="relative flex md:w-7/12 w-11/12 flex-wrap items-stretch mb-3">
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </span>
        <input
          type="text"
          v-model="search"
          v-on:change="onChange"
          placeholder="Title, companies, expertise or benefits"
          class="h-10 md:px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full md:pl-10 sm:pl-10 sm:text-xs md:text-lg"
        />
        <button
          class="absolute right-0 bg-blue-500 hover:bg-blue-500 text-white font-semibold inline text-base m-1 py-1 px-5 rounded-sm"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },

  methods: {
    formSubmit(e) {
      e.preventDefault()
      this.$emit('search', this.search)
    },
    onChange() {
      if (this.search == null || this.search == '') {
        console.log('checking')
        this.$emit('search', this.search)
      }
    },
  },
}
</script>

<style></style>

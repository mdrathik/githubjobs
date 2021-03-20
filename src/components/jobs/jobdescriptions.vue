<template>
  <div class="md:grid md:grid-cols-12 md:px-20 md:py-10">
    <div class="md:col-span-3">
      <div>
        <router-link to="/">
          <h4 class="text-blue-500 text-sm font-semibold">Back To Search</h4>
        </router-link>
      </div>
      <h4 class="mt-10 text-gray-400 text-xs font-bold">HOW TO APPLY</h4>
      <p
        class="text-blue-600 text-left mt-2 underline capitalize w-80"
        v-html="job.how_to_apply"
      ></p>
    </div>
    <div class="col-span-9 md:px-10 sm:mt-10 md:mt-0 mt-10">
      <div>
        <h3
          href="#"
          class="block text-2xl leading-tight text-gray-800 font-bold"
        >
          {{ job.title }}
          <button
            class="px-2 w-20 py-0.5 ml-2 text-indigo-700 transition-colors duration-150 border text-xs border-indigo-500 rounded-sm focus:shadow-outline"
          >
            {{ job.type }}
          </button>
        </h3>
        <h2 class="mt-2 w-36 mr-10 text-xs text-gray-400">
          <svg
            class="inline-block w-4 h-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ job.created_at }}
        </h2>
      </div>

      <div class="mt-10">
        <div class="flex">
          <div class="md:flex-shrink-0 h-28">
            <img
              class="h-28 object-cover"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Man looking at item at a store"
            />
          </div>
          <div class="px-3 w-full">
            <span
              class="text-xs md:text-xl text-gray-700 font-semibold w-full"
              >{{ job.company }}</span
            >
            <h2 class="text-xs md:text-lg text-gray-400">
              <svg
                class="inline-block w-4 h-4"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ job.location }}
            </h2>
          </div>
        </div>
      </div>

      <div
        class="mt-4 mb-20 text-sm text-gray-600 descriptionHtml"
        v-html="job.description"
      ></div>
    </div>
  </div>
</template>

<script>
import json from '../../../src/data.json'
export default {
  props: ['id'],
  data() {
    return {
      rawdata: json,
      job: {},
    }
  },

  created() {
    const obj = this.rawdata.find((job) => job.id === this.$route.params.id)
    this.job = obj
  },
}
</script>

<style>
.descriptionHtml > p {
  margin-top: 20px;
}
</style>

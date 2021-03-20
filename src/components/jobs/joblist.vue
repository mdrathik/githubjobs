<template>
  <router-link :to="`/job/${id}`">
    <div class="mb-2 bg-white rounded-sm shadow-md overflow-hidden">
      <div class="flex">
        <div class="md:flex-shrink-0 h-28 m-1">
          <img
            v-if="company_logo != null"
            class="w-28 object-scale-down h-full rounded-sm shadow-sm"
            :src="company_logo"
            :alt="company"
          />

          <img
            v-else
            class="w-28 object-scale-down h-full rounded-sm shadow-sm"
            src="https://raw.githubusercontent.com/Rogero0o/GifLoadingView/master/sample/src/main/res/drawable-hdpi/num78.gif"
            :alt="company"
          />
        </div>
        <div class="px-2 py-3 w-full">
          <span class="text-xs text-gray-700 font-semibold w-full">{{
            company
          }}</span>
          <h3 href="#" class="block mt-1 text-lg leading-tight text-gray-800">
            {{ title }}
          </h3>
          <div class="flex w-full">
            <p
              class="px-3 w-20 py-0.5 mt-3 self-center text-indigo-700 transition-colors duration-150 border text-xs border-blue-500 rounded-sm focus:shadow-outline"
            >
              {{ type }}
            </p>
            <div class="flex w-full">
              <h2 class="w-full text-right mt-2 text-xs text-gray-400">
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
                {{ location }}
              </h2>
              <h2 class="text-right mt-2 w-36 mr-10 text-xs text-gray-400">
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
                  >
                </svg>
                {{ created_at }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div></router-link
  >
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'type',
    'company_url',
    'company',
    'created_at',
    'location',
    'description',
    'how_to_apply',
    'company_logo',
  ],
  data() {
    return {
      imageLink:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    }
  },
}
</script>

<style></style>

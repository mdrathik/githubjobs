<template>
  <div class="">
    <search-bar @search="search"></search-bar>
  </div>

  <div class="md:grid grid-cols-12">
    <side-bar
      @onChangeLocation="onChangeLocation"
      @Contract="Contract"
    ></side-bar>
    <div class="col-span-8 md:ml-10 mt-6">
      <job-list
        v-for="(item, index) in newData"
        v-show="setPaginate(index)"
        :key="index"
        :id="item.id"
        :type="item.type"
        :company_url="item.company_url"
        :company="item.company"
        :created_at="item.created_at"
        :location="item.location"
        :title="item.title"
        :description="item.description"
        :how_to_apply="item.how_to_apply"
        :company_logo="item.company_logo"
      ></job-list>

      <div id="pagination">
        <div>
          <nav class="block">
            <ul class="flex pl-0 rounded list-none flex-wrap">
              <li
                v-for="(page_index, index) in paginate_total"
                :key="index"
                @click.prevent="updateCurrent(page_index)"
              >
                <a
                  href="#"
                  class="first:ml-0 text-xs font-semibold flex w-8 h-8 rounded-md mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500"
                >
                  {{ page_index }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../ui/SearchBanner.vue'
import SideBar from '../ui/SideBar.vue'
import JobList from '../jobs/joblist.vue'
//import axios from 'axios'
import json from '../../../src/data.json'
export default {
  components: {
    SearchBar,
    SideBar,
    JobList,
  },
  data() {
    return {
      current: 1,
      rawdata: json,
      paginate: 5,
      paginate_total: 0,
      search_filter: '',
      status_filter: '',
      searchItem: null,
    }
  },

  computed: {
    newData() {
      console.log(this.searchItem)
      if (this.searchItem == null || this.searchItem == '') {
        this.paginate_total = Math.ceil(this.rawdata.length / this.paginate)
        return this.rawdata
      } else {
        const rawData = this.rawdata
        const newRawData = rawData.filter((job) => {
          if (
            (this.searchItem &&
              job.company
                .toLowerCase()
                .includes(this.searchItem.toLowerCase())) ||
            job.title.toLowerCase().includes(this.searchItem.toLowerCase()) ||
            job.location
              .toLowerCase()
              .includes(this.searchItem.toLowerCase()) ||
            /*  job.description
              .toLowerCase()
              .includes(this.searchItem.toLowerCase()) || */
            job.type.toLowerCase().includes(this.searchItem.toLowerCase())
          ) {
            return true
          }

          return false
        })
        this.paginate_total = Math.ceil(newRawData.length / this.paginate)
        return newRawData
      }
    },
  },
  created() {
    //console.log('First Time Created')
    //this.newData
  },

  methods: {
    search(value) {
      //console.log(value)
      this.searchItem = value
    },
    Contract(value) {
      if (value) {
        this.searchItem = 'Contract'
      } else {
        this.searchItem = ''
      }
    },
    onChangeLocation(value) {
      this.searchItem = value
    },
    setPaginate: function (i) {
      if (this.current == 1) {
        return i < this.paginate
      } else {
        return (
          i >= this.paginate * (this.current - 1) &&
          i < this.current * this.paginate
        )
      }
    },
    setStatus: function (status) {
      this.status_filter = status
      this.$nextTick(function () {
        this.updatePaginate()
      })
    },
    updateCurrent: function (i) {
      this.current = i
    },
  },

  // async created() {
  //   try {
  //     const response = await axios.get(
  //       `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json/`
  //     )
  //     this.rawdata = response.data
  //     console.log('Data Loaded Finished')
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
}
</script>

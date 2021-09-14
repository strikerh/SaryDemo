<template>
  <v-container class="grey lighten-5 mt-6">
    <v-row>
      <transition name="fade">
        <v-col
            cols="12"
            sm="4"
            v-show="filterShown"
        >

          <filter-component :filter-fields="filterFields" @onchange="onFilterChanged"
          ></filter-component>
        </v-col>
      </transition>
      <v-col
          cols="12"
          :sm="filterShown? 8: 12"
      >
        <v-card
            elevation="2"
            tile
        >
          <v-card-title>
            <div>Heros</div>
            <v-spacer></v-spacer>
            <v-btn icon small @click="filterShown=!filterShown">
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-data-table
              :headers="headers"
              :items="data"
              :items-per-page="8"

          ></v-data-table>
        </v-card>

      </v-col>
    </v-row>

  </v-container>

</template>

<script lang="ts">
import Vue from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'
import FilterComponent from "@/components/filter.vue";
import {Component, Watch} from "vue-property-decorator";
import HeroService from "@/services/HeroService";
import {Inject} from "vue-di-container";
import AxiosService from "@/services/AxiosService";

@Component({
  name: 'Home',
  components: {
    FilterComponent
  },
  directives: {},
  diProvide: [
    HeroService,
    AxiosService
  ]

})
export default class Home extends Vue {
  @Inject(AxiosService) public axiosService!: AxiosService;
  @Inject(HeroService) public heroService!: HeroService;

  public filterShown = true;
  public filter = {};
  public filterFields = {};
  public headers = [
    {
      text: 'Dessert (100g serving)',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    {text: 'Calories', value: 'calories'},
    {text: 'Fat (g)', value: 'fat'},
    {text: 'Carbs (g)', value: 'carbs'},
    {text: 'Protein (g)', value: 'protein'},
    {text: 'Iron (%)', value: 'iron'},
  ];

  public data: any[] = [];


  public async mounted(): Promise<void> {
    this.heroService.fetchAnyEP('/demoApi/filter.json').then((response: any) => {
      if (response) {
        this.filterFields = response
        console.log('filterFields', this.filterFields);
      }
    });

    const response = await this.heroService.fetchAnyEP('/demoApi/data.json');
    this.data = response.data
    debugger
  }

  @Watch('$route')
  public async onRouterChanged(newVal: any): Promise<void> {

    this.data = await this.heroService.fetchAnyEP('/demoApi/data.json' + newVal.query);

  }

  public onFilterChanged(event: any): void {

    console.log('event', event);

    this.$router.push({query: event})
  }

}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

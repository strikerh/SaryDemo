<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
import {Component, Prop, PropSync, Vue, Watch} from 'vue-property-decorator';
import HeroService from "@/services/HeroService";
import {Inject} from "vue-di-container";
import {InjectOptions} from 'vue-property-decorator/lib/decorators/Inject';


@Component({
  components: {},
  directives: {},

})
export default class FilterComponent extends Vue {
  @Inject(HeroService) public heroService!: HeroService;
  public showFilters = false;
  public filter: any = {};
  public optionsList: any[] = [];


  public activePicker: any = null;
  public date: any = null;
  public menu = false;

  public filterForm: any = {};
  public timer: any = {};

  @PropSync('filterFields', {default: undefined})
  public syncedFilterFields!: any;

  @Watch('menu')
  public onMenuChanged(val: any) {
    val && setTimeout(() => (this.activePicker = 'YEAR'))
  }

  public save(date: any): void {
    debugger
    console.log('$refs.menu', this.$refs.menu1)
    if (this.$refs.menu1) {
      (this.$refs.menu1 as any)[0].save(date)
    }
  }


  public getItems(api: any): any[] | undefined {
    if (!this.optionsList.length) {
      this.heroService.fetchAnyEP(api).then((response: any) => {
        if (response.IsSuccess) {
          this.optionsList = response.Response
          console.log('optionsList', this.optionsList);
        }
      });
    } else {
      return this.optionsList;
    }


  }

  onchange(event: any): void {
    this.filterForm = {...this.filterForm};
    this.$emit('onchange',  this.filterForm);
  }


}
</script>

<template>

  <v-card
      elevation="2"
      tile
  >
    <v-card-title class="justify-center ">Filter</v-card-title>
    <v-divider></v-divider>

    <v-card-text>
      <v-form>
        <v-row>
          <v-col v-for="(field, index) in syncedFilterFields" :key="index"
                 cols="12"
          >
            <v-text-field v-if="field.type === 'text'" hide-details
                          v-model="filterForm[field.title]"
                          :counter="10"
                          :label="field.title"
            ></v-text-field>

            <v-select v-if="field.type === 'dropdown' && optionsList"
                      hide-details
                      v-model="filterForm[field.title]"
                      :label="field.title"
                      :items="getItems(field.api)"
                      :item-value="'Alpha3Code'"
                      :item-text="'Name'"
                      :multiple="field.multiple"

            ></v-select>


              <v-menu
                  v-if="field.type === 'date'"
                  ref="menu1"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      hide-details
                      v-model="filterForm[field.title]"
                      :label="field.title"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="filterForm[field.title]"
                    :active-picker.sync="activePicker"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                ></v-date-picker>
              </v-menu>
          </v-col>

        </v-row>

      </v-form>

    </v-card-text>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
          color="primary"
          elevation="2"
          @click="onchange"
      >
        <v-icon left>mdi-filter-variant</v-icon>
        filter
      </v-btn>
    </v-card-actions>
  </v-card>

</template>


<style lang="scss" scoped>

</style>

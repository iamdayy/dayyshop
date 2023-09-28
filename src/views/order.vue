<script setup lang="ts">
import { storeToRefs } from "pinia";
import Cart from "../components/Cart.vue";
import useCartStore from "../stores/cart";
import { onMounted, ref } from "vue";
import { initAccordions } from "flowbite";
import axios from "../plugins/axios";

const { carts, getSubTotal } = storeToRefs(useCartStore());
const provinces = ref<any[]>([]);
const cities = ref<any[]>([]);
const districts = ref<any[]>([]);
const villages = ref<any[]>([]);
const courires = ref<any[]>([]);
const discount = ref<number>(Math.floor(Math.random() * 10) * 1000);
const shipCost = ref<number>(Math.floor(Math.random() * 100) * 1000);
const total = ref<number>(getSubTotal.value - discount.value + shipCost.value)

const RpCurr = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    })
const loadCourires = async () => {
    try {
        const { data } = await axios.get("v1/list_courier");
        courires.value = data;
    } catch (error) {
        console.log(error);
    }
}
const loadVillages = async (ev: any) => {
    const id = ev.target.value;
    try {
        const { data } = await axios.get("wilayah/kelurahan", {
            params: {
                id_kecamatan: id,
            }
        })
        villages.value = data.value;
    } catch (error) {
        console.log(error);
    }
}
const loadDistricts = async (ev: any) => {
    const id = ev.target.value;
    try {
        const { data } = await axios.get("wilayah/kecamatan", {
            params:{
                id_kabupaten: id,
            }
        });
        districts.value = data.value;
    } catch (error) {
        console.log(error);
    }
}
const loadCities = async (ev: any) => {
    const id = ev.target.value;
    
    try {
        const { data } = await axios.get("wilayah/kabupaten", {
            params: {
                id_provinsi: id,
            }
        });
        cities.value = data.value;
    } catch (error) {
        console.log(error);
    }
}
const loadProvinces = async () => {
  try {
    const { data } = await axios.get("wilayah/provinsi");
    provinces.value = data.value;
  } catch (error: any) {
    console.log(error);
  }
};
onMounted(() => {
  initAccordions();
  loadProvinces();
  loadCourires();
});
</script>
<template>
  <section
    class="md:flex md:flex-row-reverse md:justify-between p-6 text-gray-700 dark:text-white bg-white dark:bg-gray-700"
    id="accordion-collapse"
    data-accordion="collapse"
  >
    <h2 id="accordion-collapse-heading-2" class="w-full md:hidden">
      <button
        type="button"
        class="flex items-center justify-between w-full md:hidden p-5 font-medium text-left text-gray-500 border border-b-0 rounded-t-xl border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        data-accordion-target="#accordion-collapse-body-2"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-2"
      >
        <span>Order Summary</span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <!-- cart section -->
    <div
      class="w-full md:w-1/2 hidden md:block p-6"
      id="accordion-collapse-body-2"
      aria-labelledby="accordion-collapse-heading-"
    >
      <h2 class="text-base font-semibold leading-7 hidden md:block">
        Order Summary
      </h2>
      <Cart :carts="carts">
        <template #footer>
          <div
            class="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200"
          >
            <p>Discount</p>
            <p>{{ RpCurr.format(discount) }}</p>
          </div>
          <div
            class="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200"
          >
            <p>Shipment cost</p>
            <p>{{ RpCurr.format(shipCost) }}</p>
          </div>
          <div
            class="flex justify-between text-2xl font-semibold text-gray-900 dark:text-gray-200"
          >
            <p>Total</p>
            <p>{{ RpCurr.format(total) }}</p>
          </div>
        </template>
      </Cart>
    </div>
    <h2 id="accordion-collapse-heading-1" class="w-full md:hidden">
      <button
        type="button"
        class="flex items-center justify-between w-full md:hidden p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-b-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>Contact Information</span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <!-- form section -->
    <div
      class="p-6 w-full hidden md:block md:w-1/2"
      id="accordion-collapse-body-1"
      aria-labelledby="accordion-collapse-heading-1"
    >
      <form>
        <div class="space-y-12">
          <div class="pb-12">
            <h2 class="text-base font-semibold leading-7 hidden md:block">
              Contact Information
            </h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
              <div class="sm:col-span-6">
                <label
                  for="first-name"
                  class="block text-sm font-medium leading-6"
                  >First name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="last-name"
                  class="block text-sm font-medium leading-6"
                  >Last name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-12">
                <label for="email" class="block text-sm font-medium leading-6"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-6 sm:col-start-1">
                <label
                  for="province"
                  class="block text-sm font-medium leading-6"
                  >Province</label
                >
                <div class="mt-2">
                  <select
                    id="province"
                    name="province"
                    autocomplete="province-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    @change="loadCities"
                  >
                    <option
                      v-for="(province, i) in provinces"
                      :key="i"
                      :value="province.id"
                    >
                      {{ province.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="city"
                  class="block text-sm font-medium leading-6"
                  >City</label
                >
                <div class="mt-2">
                  <select
                    id="city"
                    name="city"
                    autocomplete="city-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    @change="loadDistricts"
                  >
                    <option
                      v-for="(city, i) in cities"
                      :key="i"
                      :value="city.id"
                    >
                      {{ city.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="district"
                  class="block text-sm font-medium leading-6"
                  >District</label
                >
                <div class="mt-2">
                  <select
                    id="district"
                    name="district"
                    autocomplete="district-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    @change="loadVillages"
                  >
                    <option
                      v-for="(district, i) in districts"
                      :key="i"
                      :value="district.id"
                    >
                      {{ district.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="village"
                  class="block text-sm font-medium leading-6"
                  >Village</label
                >
                <div class="mt-2">
                  <select
                    id="village"
                    name="village"
                    autocomplete="village-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option
                      v-for="(village, i) in villages"
                      :key="i"
                      :value="village.id"
                    >
                      {{ village.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="postal-code"
                  class="block text-xs font-medium leading-6"
                  >ZIP / Postal</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset bg-gray-50 dark:bg-gray-600 ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-10">
                <label
                  for="courir"
                  class="block text-sm font-medium leading-6"
                  >Courir</label
                >
                <div class="mt-2">
                  <select
                    id="courir"
                    name="courir"
                    autocomplete="courir-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option
                      v-for="(courir, i) in courires"
                      :key="i"
                      :value="courir.code"
                    >
                      {{ courir.description }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="street-address"
                  class="block text-sm font-medium leading-6"
                  >Street address</label
                >
                <div class="mt-2">
                  <textarea
                    name="street-address"
                    id="street-address"
                    row="5"
                    placeholder="Write your address..."
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm dark:bg-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-700 placeholder:dark:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <hr class="h-px mx-6 my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div
        class="p-2 flex items-center flex-col md:flex-row md:justify-between gap-3"
      >
        <button
          type="button"
          class="px-3 py-2 text-sm font-semibold leading-12 w-full md:w-1/2 bg-orange-500 rounded-md shadow-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md w-full md:w-1/2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Confirm
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped></style>

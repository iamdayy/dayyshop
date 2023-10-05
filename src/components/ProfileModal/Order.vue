<script setup lang='ts'>
import { initModals } from 'flowbite';
import { onMounted } from 'vue';
import { AnnotationIcon, DocumentDownloadIcon, EyeIcon, PrinterIcon } from '@heroicons/vue/outline';

const THead = ["Order", "Total", "Status"]
onMounted(() => {
    initModals();
});
</script>
<template>
    
<div class="relative w-full h-96 overflow-x-auto overflow-y-scroll hidden-scroll">
    <div class="flex items-center justify-between py-4">
        <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:text-gray-400 dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Action button</span>
                <AnnotationIcon class="w-6 h-6" />
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
        </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th v-for="item, i in  THead" :key="i" scope="col" class="px-6 py-3" :class="item == 'Order' ? '' : 'display px-6 py-3'">
                    {{ item }}
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody class="">
            <tr v-for="i in 20" :key="i" class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="../../assets/vue.svg" alt="Jese image">
                    <div class="pl-3">
                        <div class="text-base font-semibold">Neil Sims</div>
                        <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4 display">
                    240.000
                </td>
                <td class="px-6 py-4 display">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Delivered
                    </div>
                </td>
                <td class="px-6 py-4">
                    <!-- Modal toggle -->
                    <a href="#" type="button" data-modal-target="orderDetailModal" data-modal-show="orderDetailModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> <EyeIcon class="w-5 h-5" /> </a>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Edit user modal -->
    <div id="orderDetailModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Invoice
                    </h3>
                   <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="orderDetailModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6 overflow-y-scroll h-96">
                    <article class="overflow-hidden">
   <div class="bg-[white] rounded-lg">
    <div class="p-9">
     <div class="space-y-6 text-slate-700">
      <img class="object-cover h-12" src="../../assets/vue.svg" />

      <p class="text-xl font-extrabold tracking-tight uppercase font-body">
       Unwrapped.design
      </p>
     </div>
    </div>
    <div class="p-9">
     <div class="flex w-full">
      <div class="grid grid-cols-4 gap-12">
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">
         Invoice Detail:
        </p>
        <p>Unwrapped</p>
        <p>Fake Street 123</p>
        <p>San Javier</p>
        <p>CA 1234</p>
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">Billed To</p>
        <p>The Boring Company</p>
        <p>Tesla Street 007</p>
        <p>Frisco</p>
        <p>CA 0000</p>
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">Invoice Number</p>
        <p>000000</p>

        <p class="mt-2 text-sm font-normal text-slate-700">
         Date of Issue
        </p>
        <p>00.00.00</p>
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">Terms</p>
        <p>0 Days</p>

        <p class="mt-2 text-sm font-normal text-slate-700">Due</p>
        <p>00.00.00</p>
       </div>
      </div>
     </div>
    </div>

    <div class="p-9">
     <div class="flex flex-col mx-0 mt-8">
      <table class="min-w-full divide-y divide-slate-500">
       <thead>
        <tr>
         <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
          Description
         </th>
         <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
          Quantity
         </th>
         <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
          Rate
         </th>
         <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
          Amount
         </th>
        </tr>
       </thead>
       <tbody>
        <tr class="border-b border-slate-200">
         <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
          <div class="font-medium text-slate-700">Tesla Truck</div>
          <div class="mt-0.5 text-slate-500 sm:hidden">
           1 unit at $0.00
          </div>
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          48
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          $0.00
         </td>
         <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr class="border-b border-slate-200">
         <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
          <div class="font-medium text-slate-700">
           Tesla Charging Station
          </div>
          <div class="mt-0.5 text-slate-500 sm:hidden">
           1 unit at $75.00
          </div>
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          4
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          $0.00
         </td>
         <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>

        <!-- Here you can write more products/tasks that you want to charge for-->
       </tbody>
       <tfoot>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
          Subtotal
         </th>
         <th scope="row" class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
          Subtotal
         </th>
         <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
          Discount
         </th>
         <th scope="row" class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
          Discount
         </th>
         <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
          Tax
         </th>
         <th scope="row" class="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
          Tax
         </th>
         <td class="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
          Total
         </th>
         <th scope="row" class="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
          Total
         </th>
         <td class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
       </tfoot>
      </table>
     </div>
    </div>

    <div class="mt-48 p-9">
     <div class="border-t pt-9 border-slate-200">
      <div class="text-sm font-light text-slate-700">
       <p>
        Payment terms are 14 days. Please be aware that according to the
        Late Payment of Unwrapped Debts Act 0000, freelancers are
        entitled to claim a 00.00 late fee upon non-payment of debts
        after this time, at which point a new invoice will be submitted
        with the addition of this fee. If payment of the revised invoice
        is not received within a further 14 days, additional interest
        will be charged to the overdue account and a statutory rate of
        8% plus Bank of England base of 0.5%, totalling 8.5%. Parties
        cannot contract out of the Act’s provisions.
       </p>
      </div>
     </div>
    </div>
   </div>
  </article>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <DocumentDownloadIcon class="w-6 h-6" /> </button>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <PrinterIcon class="w-6 h-6" /> </button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<style scoped>
.display {
    display:none;
}

@media (min-width: 640px) {
    .display {
        display: table-cell !important;
    }
}
</style>
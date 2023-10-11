<script setup lang="ts">
import { PropType } from 'vue';
import '../assets/invoice.css';
import { Order } from '../types';

const RpCurr = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    })

defineProps({
	data: {} as PropType<Order>
});
</script>
<template>
  <article class="overflow-hidden">
    <div class="invoice-box bg-white">
			<table>
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
								<td class="title">
									<img src="../assets/conference.jpg" alt="Company logo" style="width: 100%; max-width: 300px" />
								</td>

								<td>
									Invoice #: {{ data?.id }}<br />
									Created: January 1, 2023<br />
									Due: February 1, 2023
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="information">
					<td colspan="2">
						<table>
							<tr>
								<td>
									{{ data?.customer.address.street }}<br />
									{{ data?.customer.address.village }}<br />
									{{ data?.customer.address.district }}, {{ data?.customer.address.city }}, {{ data?.customer.address.province }} {{ data?.customer.address.postal }}
								</td>

								<td>
									{{ data?.customer.courier }}<br />
									{{data?.customer.name.first}} {{data?.customer.name.last}}<br />
									{{data?.customer.email}}
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="heading">
					<td>Item</td>

					<td>Price</td>

					<td>Qty</td>

					<td>Subtotal</td>
				</tr>

				<tr class="item" v-for="item, i in data?.products" :key="i">
					<td>{{ item.name }}</td>

					<td>{{ RpCurr.format(item.price) }}</td>

					<td>{{ item.quantity }}</td>

					<td>{{ RpCurr.format(item.quantity * item.price) }}</td>
				</tr>

				<tr class="total">
					<td>Ship Cost :</td>

					<td colspan="3">{{ RpCurr.format(data?.shipcost!) }}</td>
				</tr>
				<tr class="total">
					<td>Discount :</td>

					<td colspan="3">{{ RpCurr.format(data?.discount!) }}</td>
				</tr>
				<tr class="total">
					<td>Total :</td>

					<td colspan="3">{{ RpCurr.format(data?.total!) }}</td>
				</tr>
			</table>
		</div>
  </article>
</template>
<style></style>

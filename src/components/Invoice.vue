<script setup lang="ts">
import { PropType } from 'vue';
import '../assets/invoice.css';
import { Order } from '../types';

const RpCurr = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    })

defineProps({
	data: {
		type: {} as PropType<Order>,
		required: true,
	}
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
					<td>Payment Method</td>

					<td>Check #</td>
				</tr>

				<tr class="details">
					<td>Check</td>

					<td>1000</td>
				</tr>

				<tr class="heading">
					<td>Item</td>

					<td>Price</td>
				</tr>

				<tr class="item">
					<td>Website design</td>

					<td>$300.00</td>
				</tr>

				<tr class="item">
					<td>Hosting (3 months)</td>

					<td>$75.00</td>
				</tr>

				<tr class="item last">
					<td>Domain name (1 year)</td>

					<td>$10.00</td>
				</tr>

				<tr class="total">
					<td></td>

					<td>Total: {{ RpCurr.format(data?.total) }}</td>
				</tr>
			</table>
		</div>
  </article>
</template>
<style></style>

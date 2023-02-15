<script>
	import Decrement from '../../Decrement.svelte';
	import Increment from '../../Increment.svelte';
	import Resetter from '../../Resetter.svelte';
	import { storeCount } from '../../stores';

	let countValue = 0;

	storeCount.subscribe((value) => {
		countValue = value;
	});
</script>

<h1>The count is {countValue}</h1>
<a href="/">back to home</a>

<h1>hi svelte store</h1>

<Increment />
<Decrement />
<Resetter />

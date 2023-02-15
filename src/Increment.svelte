<script>
	import { storeCount } from './stores';

	function increment() {
		storeCount.update((x) => x + 1);
	}
</script>

<button on:click={increment}> + </button>

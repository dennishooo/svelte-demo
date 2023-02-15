<script>
	import { storeCount } from './stores';

	function decrement() {
		storeCount.update((x) => x - 1);
	}
</script>

<button on:click={decrement}> - </button>

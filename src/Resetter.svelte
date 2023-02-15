<script>
	import { storeCount } from './stores';

	function reset() {
		storeCount.set(0);
	}
</script>

<button on:click={reset}> reset </button>

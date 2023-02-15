<script>
	export let message = 'hello world';
	export function greet() {
		alert('welcome to svelte');
	}
</script>

<h1>{message}</h1>
<button on:click={greet}>greet</button>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

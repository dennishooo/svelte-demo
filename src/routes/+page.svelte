<script>
	import { storeCount } from '../stores';

	// values form store can be retrieved with $ prefix
	// let countFromStore = 0;
	// storeCount.subscribe((value) => {
	// 	countFromStore = value;
	// });

	// export mark it as prop, accessible to consumer of component
	export let message = 'hello world';
	let count = 0;

	// this wont work
	// let countSquare = count * count;
	// we dont need to declare it, svelte will do it
	$: countSquare = count * count;
	let arr = [0, 1];
	function greet() {
		alert('welcome to svelte');
	}
	let increment = () => count++;
	let arrPush = () => {
		arr.push(count);
		// svelte reactivity is based on assignment
		// arr = arr; // subsequent assignment is required to trigger the update
	};
	let arrAssignment = () => {
		// arr.push(count);
		arr = arr; // subsequent assignment is required to trigger the update
	};
	// $: make a statement reactive, somehow like useEffect dependencies?
	$: message = count.toString() + '* jengg';
	$: {
		console.log('hor');
		console.log('yi');
		console.log('jo');
		console.log('ho');
		console.log('dor');
		console.log('yea');
		console.log(count);
	}
</script>

<a href="/store">to store</a>

<h1>{message}</h1>
<div>let's try <strong>svelte!</strong></div>
<!-- <h2>store count: {countFromStore}</h2> -->
<h2>store count with prefix: {$storeCount}</h2>

<h2>count: {count}</h2>
<div>{countSquare}</div>

<h3>{arr}</h3>
<button on:click={increment}>+</button>
<button on:click={arrPush}>arr+</button>
<button on:click={arrAssignment}>arr = arr</button>

<button on:click={greet}>greet</button>

<style>
	:global(body) {
		/* this will apply to <body> */
		margin: 20%;
	}

	div :global(strong) {
		/* this will apply to all <strong> elements, in any
			 component, that are inside <div> elements belonging
			 to this component */
		color: goldenrod;
	}

	p:global(.red) {
		font-size: 100px;
		/* this will apply to all <p> elements belonging to this 
			 component with a class of red, even if class="red" does
			 not initially appear in the markup, and is instead 
			 added at runtime. This is useful when the class 
			 of the element is dynamically applied, for instance 
			 when updating the element's classList property directly. */
	}

	.red {
		color: red;
	}
</style>

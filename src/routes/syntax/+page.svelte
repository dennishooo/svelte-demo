<script>
	let toStore = '/store';
	let att = {
		id: 'myId',
		class: 'myClass'
		// style: {
		//     color:'red'
	};
	let inputVal = 5;
	let str = '';
	$: isDigit = /^\d+$/.test(str.toString());
	// sometimes the order of the attributes matters
	$: inputAtt = {
		type: 'range',
		min: 0,
		max: 10,
		value: inputVal
	};
	$: cal = {
		add: () => {
			inputVal++;
			str += inputVal.toString();
			str = str;
		},

		minus: () => {
			inputVal--;
			str = '';
		}
	};
	let items = [
		{ id: 1, name: 'a', quantity: 1 },
		{ id: 2, name: 'b', quantity: 2 },
		{ id: 3, name: 'c', quantity: 3 },
		{ id: 4 }
	];

	let emptyItems = [];
	let girl = {
		name: 'katrina',
		age: 18,
		height: 170
	};
</script>

<a href="/">back to home</a>
<a href={toStore}>go to store</a>

<h3 class={isDigit ? 'myClass' : 'otherClass'}>is digit ahhhh</h3>

<div {...att}>check my attribute</div>
<button on:click={cal.minus}>-</button>
<input {...inputAtt} />
<button on:click={cal.add}>+</button>
<button disabled={42 === 42}>disabled?</button>

<!-- conditional rendering -->
{#if inputVal > 9}
	<h1>haha</h1>
{:else if inputVal > 5}
	<h2>hehe</h2>
{:else if inputVal === 5}
	<div />
{:else}
	<h3>hoho</h3>
{/if}

<h1>shopping list</h1>
<ul>
	<!-- the key is used to diff thee list when data changes -->
	{#each emptyItems as item, idx (item.id)}
		<li>{idx}: name: <strong>{item.name}</strong> quantity: <strong>{item.quantity}</strong></li>
	{:else}
		<li>wtf is this?</li>
	{/each}
</ul>

<ul>
	<!-- deconstruct and rest pattern -->
	{#each items as { name, quantity }, idx (name)}
		<li>{idx}: name: <strong>{name}</strong> quantity: <strong>{quantity}</strong></li>
	{:else}
		<li>wtf is this?</li>
	{/each}
</ul>

<!-- <h3>dream partner</h3>
<ul>
    {#each girl as val (key) }
        <li></li>
    {/each}
</ul> -->
<style>
	.myClass {
		color: red;
	}
</style>

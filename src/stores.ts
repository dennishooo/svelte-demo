import { writable } from 'svelte/store';

export const storeCount = writable(0);

// You can create your own stores
// without relying on svelte/store,
// by implementing the store contract:

// store = { subscribe: (subscription: (value: any) => void) => (() => void), set?: (value: any) => void }

// RxJS Observables???

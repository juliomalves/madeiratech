<style global lang="postcss">
    @tailwind base;
    @layer base {
        html {
            @apply antialiased;
        }
        body {
            @apply bg-gray-100;
        }
        h1 {
            @apply mt-8 mb-4 text-3xl font-bold leading-tight;
        }
        h2 {
            @apply mt-8 mb-4 text-2xl font-bold leading-tight;
        }
        h3 {
            @apply my-2 text-xl font-bold leading-tight;
        }
        p {
            @apply text-lg leading-snug;
        }
        a {
            @apply transition-all duration-200;
        }
    }
    @tailwind components;
    @tailwind utilities;
</style>

<script lang="ts">
    import Nav from '../components/nav.svelte'

    export let segment: string
</script>

<Nav {segment} />

<main class="max-w-5xl p-4 my-0 mx-auto">
    <slot />
</main>

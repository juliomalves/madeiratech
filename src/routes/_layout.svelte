<style global lang="postcss">
    @tailwind base;
    @layer base {
        html {
            @apply antialiased;
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
            @apply mb-4 text-lg text-gray-800;
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

<main class="max-w-5xl bg-white p-4 my-0 mx-auto">
    <slot />
</main>

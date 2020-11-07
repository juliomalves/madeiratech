<script lang="ts">
    export let status: number
    export let error: Error

    const { message, stack } = error
    const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
    <title>{`Error ${status}`}</title>
</svelte:head>

<h1>{status}</h1>

<p>{message}</p>

{#if dev && stack}
    <pre>{stack}</pre>
{/if}

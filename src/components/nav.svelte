<style>
    [aria-current] {
        position: relative;
        display: inline-block;
    }
    [aria-current]::after {
        position: absolute;
        content: '';
        width: calc(100% - 1rem);
        height: 2px;
        background-color: rgb(255, 62, 0);
        display: block;
        bottom: 1px;
    }
</style>

<script lang="ts">
    export let segment: string
</script>

<nav class="max-w-5xl p-4 mx-auto">
    <ul class="flex">
        <li><a class="block py-4 px-2" rel="prefetch" aria-current={segment === undefined ? 'page' : undefined} href="/">madeiratech</a></li>
        <li><a class="block py-4 px-2" rel="prefetch" aria-current={segment === 'about' ? 'page' : undefined} href="/about">about</a></li>
    </ul>
</nav>

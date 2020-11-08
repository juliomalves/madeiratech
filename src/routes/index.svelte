<script lang="ts">
    import CompanyCard from '../components/company-card.svelte'
    import { companies } from '../companies'
</script>

<svelte:head>
    <title>Sapper project template</title>
</svelte:head>

<div class="flex flex-col w-full border border-gray-400 rounded-sm divide-y divide-gray-400">
    {#each companies as company (company.name)}
        <CompanyCard {company} />
    {/each}
</div>

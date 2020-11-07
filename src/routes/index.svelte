<script lang="ts">
    import CompanyCard from '../components/company-card.svelte'
    import { companies } from '../companies'
</script>

<svelte:head>
    <title>Sapper project template</title>
</svelte:head>

<div class="flex flex-col w-full">
    {#each companies as company (company.name)}
        <CompanyCard {company} />
    {/each}
</div>

<script lang="ts">
    import type { Company } from '../companies'
    import { emailIcon, facebookIcon, instagramIcon, linkedinIcon, locationIcon, phoneIcon, twitterIcon, youtubeIcon } from '../icons'
    import SvgIcon from './svg-icon.svelte'

    export let company: Company

    const { name, description, address, contact, website, social } = company
    const { street, postcode, city } = address ?? {}
    const { email, phone } = contact ?? {}
    const { home, jobs } = website
    const { instagram, facebook, linkedin, twitter, youtube } = social ?? {}
</script>

<article class="grid border border-gray-400 rounded-sm md:grid-cols-card p-4">
    <div class="flex items-center py-2 md:py-0 md:px-2">
        <img class="w-12 h-12" alt={name} src="./logo-192.png" width="48px" />
        <div class="flex flex-col pl-2">
            <a href={home} rel="external">
                <div>{name}</div>
            </a>
            <div class="flex items-center">
                <SvgIcon d={locationIcon} size="1rem" />
                {city}
            </div>
        </div>
    </div>

    <div class="py-2 md:py-0 md:px-2">{description}</div>

    <div class="flex flex-col justify-center py-2 md:py-0 md:px-2">
        <div class="pb-2">
            {#if facebook}
                <a class="pr-2" href={`https://facebook.com/${facebook}`}><SvgIcon d={facebookIcon} stroke="none" /></a>
            {/if}
            {#if linkedin}
                <a class="pr-2" href={`https://linkedin.com/company/${linkedin}`}><SvgIcon d={linkedinIcon} stroke="none" /></a>
            {/if}
            {#if twitter}
                <a class="pr-2" href={`https://twitter.com/${twitter}`}><SvgIcon d={twitterIcon} stroke="none" /></a>
            {/if}
            {#if instagram}
                <a class="pr-2" href={`https://instagram.com/${instagram}`}><SvgIcon d={instagramIcon} stroke="none" /></a>
            {/if}
            {#if youtube}
                <a class="pr-2" href={`https://youtube.com/user/${youtube}`}><SvgIcon d={youtubeIcon} stroke="none" /></a>
            {/if}
        </div>

        <div class="flex flex-col">
            {#if email}
                <div class="flex items-center">
                    <SvgIcon d={emailIcon} size="1rem" />
                    <a class="pl-1" href={`mailto:${email}`}>{email}</a>
                </div>
            {/if}
            {#if phone}
                <div class="flex items-center">
                    <SvgIcon d={phoneIcon} size="1rem" />
                    <a class="pl-1" href={`tel:+351${phone}`}>{phone}</a>
                </div>
            {/if}
        </div>
    </div>
</article>

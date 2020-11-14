<script lang="ts">
    import type { Company } from '../companies'
    import { emailIcon, facebookIcon, githubIcon, instagramIcon, linkedinIcon, locationIcon, phoneIcon, twitterIcon, youtubeIcon } from '../icons'
    import SvgIcon from './svg-icon.svelte'

    export let company: Company

    const { name, description, logo, address, contact, website, social } = company
    const { home } = website
    const { gmaps = home, city } = address ?? {}
    const { email, phone } = contact ?? {}
    const { instagram, facebook, github, linkedin, twitter, youtube } = social ?? {}
</script>

<article class="grid gap-y-4 md:gap-y-0 md:gap-x-4 md:grid-cols-card bg-white p-4">
    <div class="flex items-center">
        <img class="w-12" alt={name} src={logo || './logo-192.png'} width="48px" />
        <div class="flex flex-col pl-2">
            <a class="text-xl" href={home} rel="external">{name}</a>
            <a class="flex items-center text-base text-gray-600" href={gmaps} rel="external">
                <SvgIcon d={locationIcon} color="#718096" size="1rem" className="flex-none"/>
                {city}
            </a>
        </div>
    </div>

    <div class="flex items-center">
        <p>{description}</p>
    </div>

    <div class="flex flex-col justify-center">
        <div>
            {#if facebook}
                <a class="pr-2" href={`https://facebook.com/${facebook}`}><SvgIcon d={facebookIcon} color="#1977F2" stroke="none" /></a>
            {/if}
            {#if linkedin}
                <a class="pr-2" href={`https://linkedin.com/company/${linkedin}`}><SvgIcon
                        d={linkedinIcon}
                        color="#2867B2"
                        stroke="none" /></a>
            {/if}
            {#if twitter}
                <a class="pr-2" href={`https://twitter.com/${twitter}`}><SvgIcon d={twitterIcon} color="#1DA1F2" stroke="none" /></a>
            {/if}
            {#if github}
                <a class="pr-2" href={`https://github.com/${github}`}><SvgIcon d={githubIcon} color="#000" stroke="none" /></a>
            {/if}
            {#if instagram}
                <a class="pr-2" href={`https://instagram.com/${instagram}`}><SvgIcon d={instagramIcon} color="#E1306C" stroke="none" /></a>
            {/if}
            {#if youtube}
                <a class="pr-2" href={`https://youtube.com/${youtube}`}><SvgIcon d={youtubeIcon} color="#FF0000" stroke="none" /></a>
            {/if}
        </div>

        {#if email || phone}
            <div class="flex flex-col pt-4 md:pt-2">
                {#if email}
                    <div class="flex items-center">
                        <SvgIcon d={emailIcon} size="1rem" className="flex-none" />
                        <a class="pl-1" href={`mailto:${email}`}>{email}</a>
                    </div>
                {/if}
                {#if phone}
                    <div class="flex items-center">
                        <SvgIcon d={phoneIcon} size="1rem" className="flex-none" />
                        <a class="pl-1" href={`tel:+351${phone}`}>{phone}</a>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</article>

<script lang="ts">
    export let color = '#000'
    export let stroke = color
    export let noFill = false
    export let fill = noFill ? 'none' : color
    export let size = '1.5rem'
    export let d: string
    export let className: string
</script>

<svg class={`inline-block relative${className ? ` ${className}` : ''}`} viewBox="0 0 24 24" {fill} width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <path {d} {stroke} stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
</svg>

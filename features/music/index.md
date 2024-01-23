<script setup>
import { withBase, useData } from 'vitepress'

const { isDark } = useData();

</script>

# Music

Listen to your favorite anime OPs and EDs. Music videos are also available. 

All music is sourced from [AnimeThemes](../../sources/index.md#sources)

<img :src="isDark ? './music-dark.png' : './music-light.png'" />
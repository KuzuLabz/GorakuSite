<script setup>
import { withBase, useData } from 'vitepress'

const { isDark } = useData();

</script>

# User List

<img :src="isDark ? './list-dark.png' : './list-light.png'" />

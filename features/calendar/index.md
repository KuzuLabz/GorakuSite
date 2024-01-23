<script setup>
import { withBase, useData } from 'vitepress'

const { isDark } = useData();

</script>

# Calendar
View the weekly schedule of anime releases.
:::tip 📌 Tip
You can filter by list.
:::

<img :src="isDark ? './calendar-dark.png' : './calendar-light.png'" />
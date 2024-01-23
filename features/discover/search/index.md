<script setup>
import { withBase, useData } from 'vitepress'

const { isDark } = useData();

</script>

# Search

| Media Search                      | Character/Staff Search                  | Studio Search                        |
| --------------------------------- | --------------------------------------- | ------------------------------------ |
| ![media page](./search_media.png) | ![search page](./search_characters.png) | ![search page](./search_studios.png) |

## Filters

<img :src="isDark ? './filter-dark.png' : './filter-light.png'" />

## Image Search
Image search is available for anime and characters.

### Anime
:::tip 📌 Tip
Using anime screenshots will yield better results.
:::

### Characters
:::warning ⚠️ Wait Time
This feature uses a queuing system. It may take a few minutes to get a response.
:::

Uploading any image of a character will work (like fan art). The less popular a character is the less likely they will be recognized. New characters after ~2022 will not be recognized. 

Read more about the limitations here: [WD 1.4 MOAT Tagger v2](https://huggingface.co/SmilingWolf/wd-v1-4-moat-tagger-v2)


<img :src="isDark ? './image_search_dark.png' : './image_search_light.png'" />
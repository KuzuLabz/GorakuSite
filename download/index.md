<script setup>
/// <reference types="@types/gtag.js" />

import { data as release } from "../.vitepress/theme/data/release.data.mts"

console.log(release.main.assets[0].browser_download_url)


</script>

# Download

::: info
⚠️**Goraku is currently only available on Android**⚠️
:::

You can find all Goraku releases [here](https://github.com/kuzulabz/goraku-site/releases)

## Android

Android is fully supported. Goraku currently looks the best on larger phones, but should look okay on most devices.

<div align="center" style="flex-direction:row;">

<a :href="release.main.assets[0].browser_download_url">

![Static Badge](https://img.shields.io/badge/Download-%23FFF?style=for-the-badge&color=green)

</a>

</div>

## iOS

iOS is planned to be supported and is under development.

## Tablets

Tablets aren't officially supported, but Goraku should still be useable. I am currently working on proper UI scaling for tablets.

## Windows / MacOS

Would be cool to support. Once all main features are added, this will be something I'll look into.
<script setup>
import { withBase, useData } from 'vitepress'

const { isDark } = useData();
console.log(isDark.value)

const images = {
    settings: isDark.value ? './settings-dark.png' : './settings-light.png',
}

</script>

# Customization
::: warning ⚠️ Subject to Change
These settings are subject to change as we continue development. Some settings may move around for better organization.
:::

Goraku offers many ways to customize the app to your liking. We've split these settings into these groups: *Appearance*, *Media*, *Language*, and *Notifications*. 

<!-- ![Settings](./settings.png) -->

<img :src="isDark ? './settings-dark.png' : './settings-light.png'" />


## Appearance

### Themes

<img :src="isDark ? './themes-dark.jpg' : './themes-light.jpg'" />

Goraku offers a variety of themes to choose from. You can choose between many different colors; each having a light and dark variant. If you have theme suggestions, please let us know on [discord](../../socials/)!

### Navigation

<img :src="isDark ? './navigation-dark.jpg' : './navigation-light.jpg'" />

You can show or hide the labels on the bottom tabs.


### Animations

<img :src="isDark ? './animations-dark.jpg' : './animations-light.jpg'" />

We've made a few animation options available and have more planned. Here are the current options:

#### Bottom Tab Shifting
This option will show a "shifting" animation when you navigate to a new tab. With this enabled, it also hides all other tab labels excluding the active tab.

#### Sensor Motion
::: warning ⚠️ Experimental
This feature could cause your battery to drain faster due to the reading of your devices sensors.
:::

Sensor motion will use your devices position to animate certian visuals. This animation is experimental as we are still seeing what works and what doesn't. 

#### Screen Transitions
A screen transition is the animation that plays when you navigate between screens. We prefer the *Slide From Bottom*, but there are many others to choose from.

## Media

There's a load of media settings to configure. Here's a list of what you can do:

### Display

<img :src="isDark ? './media-display-dark.jpg' : './media-display-light.jpg'" />

#### Explore Tabs
You can reorder the tabs that are shown on the Explore tab. You can also hide tabs that you don't want to see.

#### Default Description
::: info ℹ️ Info
MyAnimeList description is the default. This displays a bit nicer than Anilist because Anilist provides HTML instead of plain text.
::: 

This is the description of the media you select. You can choose between Anilist or MyAnimeList description.

### Search

<img :src="isDark ? './media-search-dark.jpg' : './media-search-light.jpg'" />

#### Search History Limit
Select how many search terms you want to keep in memory.

### NSFW
::: warning ⚠️ Availability
This feature is permanently disabled on the store versions of Goraku. This is due to the policies enforced by Google and Apple.   
[Play Store Policy (Android)](https://support.google.com/googleplay/android-developer/answer/9878810) | [App Store Policy (iOS)](https://developer.apple.com/app-store/review/guidelines/#safety)
:::

<img :src="isDark ? './media-nsfw-dark.jpg' : './media-nsfw-light.jpg'" />

#### NSFW Toggle
Toggle NSFW content on or off. This will either hide or allow all NSFW content.

#### NSFW Blur
This will blur all NSFW content. This is useful if you want to hide NSFW thumnails, but still want the option to view it.

#### NSFW Blur Level
::: info ℹ️ Fan Art Only
Only applies to fan art because Anilist doesn't divide NSFW levels.
::: 

This will blur NSFW content depending on the severity of the content.

### Tags

<img :src="isDark ? './media-tags-dark.jpg' : './media-tags-light.jpg'" />

#### Tag Blacklist
You can hide content that you don't want to see by adding tags to the blacklist. This will filter out any content that contains the tag.

### Media Tile

<img :src="isDark ? './media-tile-dark.jpg' : './media-tile-light.jpg'" />

#### Layout
Customize the look of the media cards that are seen on the explore tab and search screen.

#### Default Score Type
Select the default score type that you want to see. This score will show on all media cards.

#### Score Weights
Select the range of scores for each color: red, yellow, and green. This will determine what color the score will be.

## Language

<img :src="isDark ? './language-dark.png' : './language-light.png'" />

## Notifications

<img :src="isDark ? './notifications-dark.png' : './notifications-light.png'" />

<script setup lang="ts">
import { inject, onMounted, ref } from "vue"
import { useData } from "vitepress"

import VPIconMoon from "vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue"
import VPIconSun from "vitepress/dist/client/theme-default/components/icons/VPIconSun.vue"
import VPSwitch from "vitepress/dist/client/theme-default/components/VPSwitch.vue"

const { isDark,  } = useData()

const toggleAppearance = inject("toggle-appearance", (payload: MouseEvent) => {
	isDark.value = !isDark.value
})

const supportsViewTransition = ref(false)

onMounted(() => {
	supportsViewTransition.value = "startViewTransition" in document
		&& window.matchMedia("(prefers-reduced-motion: no-preference)").matches
})
</script>

<template>
    <!-- <button
		type="button"
		role="switch"
		title="Toggle dark mode"
		class="ThemeColor"
        style="background-color: rgba(103, 80, 164, 1)"
		:aria-checked="isDark"
		:data-view-transition="supportsViewTransition"
		@click="toggleAppearance"
	>
	</button>
    <button
		type="button"
		role="switch"
		title="Toggle dark mode"
		class="ThemeColor"
        style="background-color: rgb(0, 0, 0)"
		:aria-checked="isDark"
		:data-view-transition="supportsViewTransition"
		@click="toggleAppearance"
	>
	</button>
    <button
		type="button"
		role="switch"
		title="Toggle dark mode"
		class="ThemeColor"
        style="background-color: rgb(61, 105, 27)"
		:aria-checked="isDark"
		:data-view-transition="supportsViewTransition"
		@click="toggleAppearance"
	>
	</button>
    <button
		type="button"
		role="switch"
		title="Toggle dark mode"
		class="ThemeColor"
        style="background-color: rgb(229, 95, 141)"
		:aria-checked="isDark"
		:data-view-transition="supportsViewTransition"
		@click="toggleAppearance"
	>
	</button>
    <button
		type="button"
		role="switch"
		title="Toggle dark mode"
		class="ThemeColor"
        style="background-color: rgb(192, 1, 0)"
		:aria-checked="isDark"
		:data-view-transition="supportsViewTransition"
		@click="toggleAppearance"
	>
	</button>
    <button
		type="button"
		role="switch"
		title="Toggle dark mode"
		class="ThemeColor"
        style="background-color: rgb(71, 214, 252)"
		:aria-checked="isDark"
		:data-view-transition="supportsViewTransition"
		@click="toggleAppearance"
	>
	</button> -->
	<button
		type="button"
		role="switch"
		title="Toggle dark mode"
		class="CustomSwitchAppearance"
		:aria-checked="isDark"
		:data-view-transition="supportsViewTransition"
		@click="toggleAppearance"
	>
		<ClientOnly>
            <VPSwitch :v-model="isDark" />
		</ClientOnly>
	</button>
    
</template>

<style lang="stylus" scoped>

.ThemeColor {
    display: flex
	justify-content: center
	align-items: center
	width: 18px
	height: 18px
    border-radius: 50%
    margin: 0 5px
}
.CustomSwitchAppearance {
	display: flex
	justify-content: center
	align-items: center
	width: 36px
	height: 36px
	color: var(--vp-c-text-2)
	transition: color 0.5s

	&:hover {
		color: var(--vp-c-text-1)
		transition: color 0.25s
	}

	& > :deep(svg) {
		width: 20px
		height: 20px
		fill: currentColor
	}

	&[data-view-transition="false"] {
		.fade-enter-active,
		.fade-leave-active {
			transition: opacity 0.1s ease
		}

		.fade-enter-from,
		.fade-leave-to {
			opacity: 0
		}
	}
}
</style>
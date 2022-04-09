declare module '@storyblok/js' {

    import {StoryblokConfig} from "storyblok-js-client";
    import StoryblokClient from "storyblok-js-client";

    export function useStoryblokBridge(id: string, cb: () => void, options: { apiOptions: StoryblokConfig }): void

    export function apiPlugin(): void | { storyblokApi: StoryblokClient }

    export function storyblokEditable(blok: Blok): {} | { "data-blok-c": string, "data-blok-uid": string }

    export function storyblokInit(pluginOptions: { bridge: StoryblokBridge | false, accessToken: string, use: PluginFactory[], apiOptions: StoryblokConfig }): void
}

declare module '@storyblok/react' {

    import Storyblok, {Story, StoriesParams, StoryblokBridgeConfig} from "storyblok-js-client";
    export {StoryblokComponent} from "storyblok-js-client";

    export {
        storyblokEditable,
        apiPlugin,
        useStoryblokBridge,
    } from "@storyblok/js";

    export function useStoryblok(slug: string, apiOptions: StoriesParams, bridgeOptions: StoryblokBridgeConfig): null | Story;

    export function useStoryblokState(initialStory, bridgeOptions): Story

    export function useStoryblokApi(): Storyblok

    export {useStoryblokApi as getStoryblokApi};

    export function getComponent(componentKey): (() => JSX.Element) | boolean

    export function storyblokInit(pluginOptions: { components: { [key: string]: any }, accessToken?: string, use: PluginFactory[] }): void
}

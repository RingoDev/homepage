import {StoryblokComponent} from "storyblok-js-client";
import {StoryblokDocument, StoryblokImage} from "../default";

export interface BlogPostType extends StoryblokComponent<"blog-post"> {
    title: string
    intro: string
    image: StoryblokImage
    long_text: StoryblokDocument
}

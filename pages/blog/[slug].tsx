import {GetStaticPaths, GetStaticProps} from "next";
import React from "react";
import {StoriesParams, StoryData} from "storyblok-js-client";
import Image from 'next/image'
import Head from "next/head";
import {BlogPostType} from "../../lib/types/blog/storyblok-components";
import {getStoryblokApi} from "@storyblok/react";
import {getImageDimension} from "../../lib/helpers";
import RichText from "../../lib/components/richtext";
import Navbar from "../../lib/components/blog/navbar";


interface BlogProps {
    story?: StoryData<BlogPostType>
}


export const BlogPost: React.FC<BlogProps> = ({story}) => {

    if (!story) return <>Error</>
    return (
        <>
            <Head>
                <title>{story.content.title}</title>
            </Head>
            <Navbar/>
            <div style={{paddingTop: "5rem", maxWidth: "75ch", margin: "auto"}}>

                <div style={{padding: "1rem 3rem 3rem 3rem", maxWidth: "90ch", margin: "auto"}}>
                    <h1>{story.content.title}</h1>
                    {story.content.intro !== undefined && story.content.intro !== "" ?
                        <p style={{color: "#555555"}}>{story.content.intro}</p> :
                        null
                    }
                    <div style={{position: "relative"}}>
                        <Image
                            height={getImageDimension(story.content.image.filename).height}
                            width={getImageDimension(story.content.image.filename).width}
                            alt={story.content.image.alt}
                            src={story.content.image.filename}/>

                    </div>
                    <div style={{textAlign: "center"}}>
                        {/*<span>{story.content.teaserCaption}</span>*/}
                    </div>

                    <RichText document={story.content.long_text}/>
                </div>
            </div>
            {/*<Footer/>*/}
        </>
    )
}


export const getStaticPaths: GetStaticPaths<{}> = async (_) => {
    let storiesParams: StoriesParams = {
        version: "draft", // or 'published'
        starts_with: "blog/",
        excluding_slugs: "blog/", // exclude overview page
    };
    // loads the story from the Storyblok API

    const storyblokApi = getStoryblokApi();
    let stories = await storyblokApi.getStories(storiesParams);

    const posts = stories.data.stories as StoryData<BlogPostType>[]

    return {paths: posts.map(p => "/" + p.full_slug), fallback: false}
}

export const getStaticProps: GetStaticProps<BlogProps, { slug: string }> = async (context) => {

    const slug = context.params?.slug
    const sbParams = {
        version: "draft", // or 'published'
    };
    const storyblokApi = getStoryblokApi();
    const {data} = await storyblokApi.get(`cdn/stories/blog/${slug}`, sbParams);
    const story: StoryData<BlogPostType> = data.story

    // console.log(story)
    return {
        props: {
            story,
            preview: context.preview || false
        },
        revalidate: 10,
    }
}

export default BlogPost

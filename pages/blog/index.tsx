import {GetStaticProps, NextPage} from "next";
import {StoriesParams, StoryData} from "storyblok-js-client";
import Image from 'next/image'
import Link from 'next/link'
import React from "react";
import {getStoryblokApi} from "@storyblok/react";
import {BlogPostType} from "../../lib/types/blog/storyblok-components";
import Navbar from "../../lib/components/blog/navbar";

interface Props {
    posts?: StoryData<BlogPostType>[]
}

const Blogs: NextPage<Props> = ({posts}: Props) => {
    if (!posts) {
        return <>Error ....</>
    }

    return (
        <>
            <Navbar/>
            <div style={{padding: "3rem", paddingTop: "5rem", maxWidth: "75ch", margin: "auto"}}>
                {posts.map((p) => {
                    return (
                        <div key={p.uuid}>
                            <div>{p.first_published_at}</div>

                            <Link href={"/blog/" + p.slug} passHref={true}>
                                <a style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    textAlign: "right",
                                    alignItems: "center",
                                    color: "black"
                                }}>
                                    <div style={{
                                        position: "relative",
                                        height: "10rem",
                                        width: "10rem",
                                        objectPosition: "left"
                                    }}>
                                        <Image
                                            objectFit={"contain"}
                                            layout='fill'
                                            // placeholder={"blur"}
                                            // blurDataURL={s.content.teaser.blurDataURL}
                                            // height={getImageDimension(p.content.image.filename).height}
                                            // width={getImageDimension(p.content.image.filename).width}
                                            // height={getImageDimension(p.content.image.filename).width}
                                            // width={getImageDimension(p.content.image.filename).width}
                                            alt={p.content.image.alt}
                                            src={p.content.image.filename}/>
                                    </div>
                                    {p.content.title}</a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (_) => {

    // if (context.params !== undefined) {
    //     slug = context.params.slug
    // }

    // load the draft version

    let storiesParams: StoriesParams = {
        version: "draft", // or 'published'
        starts_with: "blog/",
        excluding_slugs: "blog/", // exclude overview page
        sort_by: "first_published_at"
    };
    // loads the story from the Storyblok API

    const storyblokApi = getStoryblokApi();
    let stories = await storyblokApi.getStories(storiesParams);

    const posts = stories.data.stories as StoryData<BlogPostType>[]

    return {
        props: {
            posts
            // preview: context.preview || false
        },
        revalidate: 60,
    }
}


export default Blogs

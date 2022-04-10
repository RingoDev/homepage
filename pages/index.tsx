import type {GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {HomepageBlok} from "../lib/types/homepage/storyblok-components";
import {getComponent, getStoryblokApi} from "@storyblok/react";
import {StoryData} from "storyblok-js-client";
import React from "react";


const Home: NextPage<HomepageBlok> = ({sections, title}) => {
    if (!title) return <>No Content</>

    return (
        <div className={styles.container}>
            {
                sections.map(s => {
                    const Component = getComponent(s.component)
                    if (typeof Component !== "boolean") {
                        return (<Component key={s._uid} {...s}/>)
                    }
                })
            }
        </div>
    )
}

export const getStaticProps: GetStaticProps<HomepageBlok> = async (_) => {
    // home is the default slug for the homepage in Storyblok
    let slug = "home";

    // load the draft version
    let sbParams = {
        version: "draft", // or 'published'
    };

    const storyblokApi = getStoryblokApi();
    let {data} = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    const story: StoryData<HomepageBlok> = data.story
    return {props: story.content}
}

export default Home

import {StoryblokComponent} from "storyblok-js-client";
import {StoryblokImage} from "../default";

export interface HomepageBlok {
    sections: StoryblokComponent<any>[]
    title: string
}

export interface FooterComponent {
    title: string
    social_links: SocialLinkComponent[]
}

export interface HeadComponent {
    title: string
    description: string
    author: string
}

export interface AboutComponent {
    title: string
    leftText: string
    rightText: string
}

export interface HeaderProps {
    title: string
    subtitle: string
    image: StoryblokImage
}

export interface PortfolioProps {
    title: string
    projects: Project[]
}



export interface NavComponent {
    items: NavItem[]
    logo: StoryblokImage
    brand: string
}

interface NavItem {
    id: string
    title: string
}

interface Project {
    image: StoryblokImage
}

interface SocialLinkComponent {
    link: string,
    icon: string,
    label: string
}


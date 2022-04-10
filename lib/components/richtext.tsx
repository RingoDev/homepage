import {render} from "storyblok-rich-text-react-renderer";
import {StoryblokDocument} from "../types/default";

const RichText = ({document}: { document: StoryblokDocument }) => {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return <div>{render(document)}</div>;
}


export default RichText

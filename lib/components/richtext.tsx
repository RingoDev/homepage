import {NODE_PARAGRAPH, render} from "storyblok-rich-text-react-renderer";
import {StoryblokDocument} from "../types/default";

const RichText = ({document}: { document: StoryblokDocument }) => {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return <div>{render(document, {
        nodeResolvers: {
            [NODE_PARAGRAPH]: (children) => <p
                style={{
                    marginTop: "1.5em",
                    marginBottom: "0",
                    fontSize: "18px",
                    lineHeight: "28px"
                }}>{children}</p>
        }


    })}</div>;
}


export default RichText

import React from "react";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

class YouTubeVideo extends React.Component {
    render () {
        return (
            <div style={{ width: 1200, height: "auto" }}>;
            <ResponsiveEmbed aspectRatio="16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wb49-oV0F78?autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ResponsiveEmbed>
            </div>
        )
    }
}


export default YouTubeVideo;


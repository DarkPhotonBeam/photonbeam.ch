import React from "react";
import './Home.scss';

function Preview(props) {
    return (
        <a href={props.link} className={"Preview " + props.color}>
            <h3 className="Preview__title">{props.title}</h3>
            <h5 className="Preview__subtitle">{props.subtitle}</h5>
        </a>
    );
}

export default function Home() {
    return(
        <section className="Main__section Home">
            <div className="section Home__logo">
                <h1 className="Home__title">photonbeam.ch</h1>
                <h3 className="Home__subtitle">Utilities and Communities</h3>
            </div>
            <div className="section Home__previews">
                <Preview link="https://beat.photonbeam.ch" title="beat.photonbeam.ch" subtitle="Project Management for Musicians" color="blue" />
                <Preview link="https://beat.photonbeam.ch" title="music.photonbeam.ch" subtitle="Music Streaming Platform" color="green" />
                <Preview link="https://beat.photonbeam.ch" title="chat.photonbeam.ch" subtitle="Chat Platform" color="purple" />
            </div>
        </section>
    );
}
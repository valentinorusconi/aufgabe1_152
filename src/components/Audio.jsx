import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import soundfilemp3 from '../audio/soundfile.mp3';
import soundfilewav from '../audio/soundfile.wav';


export default () => {
    return(
        <div>
            <h2>Audio</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>wav</h3>
                    <ReactAudioPlayer
                    src = {soundfilewav}
                    controls
                    />
                </div>
                    <h3>mp3</h3>
                <div className="col-md-6">
                    <ReactAudioPlayer
                    src = {soundfilemp3}
                    controls
                    />
                </div>
            </div>
        </div>
    );
}
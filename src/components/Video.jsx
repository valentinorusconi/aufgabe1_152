import React, { Component } from 'react';
import videomp4 from '../video/videomp4.mp4';
import videowebm from '../video/videowebm.webm';

export default () => {
    return(
        <div>
            <h2>Video</h2>
            <div className="row">
                <div class="responsive-video col-md-4">
                    <h3>Youtube</h3>
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div className="responsive-video col-md-4">
                    <h3>mp4</h3>
                     <video width="320" height="180" controls>
                        <source src={videomp4} type="video/mp4" />
                    </video>
                </div>
                 <div className="responsive-video col-md-4">
                    <h3>webm</h3>
                     <video width="320" height="180" controls>
                        <source src={videowebm} type="video/webm" />
                    </video>
                </div>
            </div>
        </div>
    );
}
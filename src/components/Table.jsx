import React, { Component } from 'react';

export default () => {
    return(
    <div class="container">
    <h2>Weiteres</h2>
     <table class="table">
                    <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">MP3-Audio</th>
                          <th scope="col">WAV-Audio</th>
                          <th scope="col">MP4-Video</th>
                          <th scope="col">WebM-Video</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Chrome</th>
                            <td>Ja</td>
                            <td>Ja</td>
                            <td>Ja</td>
                            <td>Ja</td>
                        </tr>
                        <tr>
                            <th scope="row">MicrosoftEdge</th>
                            <td>Ja</td>
                            <td>Ja</td>
                            <td>Ja</td>
                            <td>Buggy</td>
                        </tr>
                        <tr>
                            <th scope="row">Firefox</th>
                            <td>Ja</td>
                            <td>Ja</td>
                            <td>Ja</td>
                            <td>Ja</td>
                        </tr>
                        <tr>
                            <th scope="row">Internet Explorer</th>
                            <td>Ja</td>
                            <td>Nein</td>
                            <td>Ja</td>
                            <td>Nein</td>
                        </tr>
                    </tbody>
                </table>
                <p>5. Das Youtube-Video verwendet einen iframe Tag.</p>
    </div>
    )
}
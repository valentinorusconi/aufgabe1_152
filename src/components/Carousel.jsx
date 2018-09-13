import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import mountainpng from '../img/mountain.png';
import mountaingif from '../img/mountain.gif';
import mountain80 from '../img/mountain80.jpg';
import mountain60 from '../img/mountain60.jpg';
import mountain40 from '../img/mountain40.jpg';
import mountain20 from '../img/mountain20.jpg';

const imageList = [
    {
        image: mountainpng,
        title: "png",
        key: "png"

    },
    {
        image: mountaingif,
        title: "gif",
        key: "gif"
    },
    {
        image: mountain80,
        title: "80%",
        key: "eighty",
    },
     {
        image: mountain60,
        title: "60%",
        key: "sixty",
     },
      {
        image: mountain40,
        title: "40%",
        key: "fourty",

      },
       {
        image: mountain20,
        title: "20%",
        key: "twenty",
       },

];


export default () => {
    return(
        <div className="container">
            <h2>Images</h2>
            <Carousel>
                {imageList.map((image) => {
                    return(
                    <Carousel.Item key={image.key}>
                    <img width={1280} height={746}  src={image.image} />
                    <Carousel.Caption>
                        <h3>{image.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                    )
                }
            )
            }
            </Carousel>
        </div>
    )
}
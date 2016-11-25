---
layout: page
title: Implementation
subtitle: how it works.
desc: how it works.
permalink: /implementation/
---
## How it works
We were fascinated by the possibility of generating new and non-existent but realistic images using conditional adversarial neural networks that *remembers* a certain set of features from the things it has seen in the past: the same process that we humans undergo when we dream.

### Dataset
Taking inspiration from the given examples, we applied a pre-defined color scheme to geographic data ([OpenStreetMap](http://www.openstreetmap.org)) using [Mapbox Studio](https://www.mapbox.com): roads, green spaces, buildings, water were styled with different colours (black, green, red, blue), so that the neural network (NN) could compare these to aerial images and learn the different features.


<img src="{{ site.baseurl }}/assets/Venice-LA01.jpg" alt="image" />

### Training, evaluating, running
We then used [vvvv](https://vvvv.org) as a tool to collect both satellite imagery and associated labeled map tiles.
We trained a conditional generative adversarial network to recontruct the satellite imagery from its map tiles.


{::nomarkdown}
<img src="{{ site.baseurl }}/assets/images/01.jpg" alt="image" />
{::}

It then produces a set of images according to the unique characteristics of each city: the same blue shade will translate to a venetian canal or a simple river, red will became a 17th century villa or a 50s modernist house in the hills of L.A.

{::nomarkdown}
<img src="{{ site.baseurl }}/assets/images/02.jpg" alt="image" />
{::}


To encompass the variability of all geographic features, we left the background as plain white. This translated to unexpected results as the NN could interpret the same white patch of land as an airport, a maize field or a dumpster.

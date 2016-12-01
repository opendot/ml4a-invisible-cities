---
layout: page
title: Implementation
subtitle: How it works.
desc: How it works.
permalink: /implementation/
---

We were fascinated by the possibility of generating new and non-existent but realistic images using conditional adversarial neural networks that *remembers* a certain set of features from what it has seen in the past; the same process that we humans undergo when we dream.

### Dataset
Taking inspiration from the given examples, we applied a pre-defined color scheme to geographic data ([OpenStreetMap](http://www.openstreetmap.org)) using [Mapbox Studio](https://www.mapbox.com): roads, green spaces, buildings, water were styled with different colours (black, green, red, blue), so that the neural network (NN) could compare these to aerial images and learn the correspondence between them.

<a href="{{ site.baseurl }}/assets/images/groundtruth.jpg"><img src="{{ site.baseurl }}/assets/images/groundtruth.jpg" alt="image" /></a>

### Training, evaluating, running
We then used [vvvv](https://vvvv.org) as a tool to collect both satellite imagery and the associated labeled map tiles. We trained a [conditional generative adversarial network](https://arxiv.org/pdf/1611.07004v1.pdf), using [pix2pix](https://github.com/phillipi/pix2pix) to reconstruct the satellite imagery from its map tiles. The sample below on the right shows the reconstructed sattelite image of the given map tile, closely resembling to the original on the left.

<div style="margin-left:-250px; margin-right:-250px">
<a href="{{ site.baseurl }}/assets/images/01.jpg"><img src="{{ site.baseurl }}/assets/images/01.jpg" alt="image" /></a>
</div>

Using this process, we trained generative models on map tiles from several cities around the world, and generated samples from them, each differentiated by the unique characteristics of each city; the same blue shade will translate to a venetian canal or a simple river, red will became a 17th century villa or a 50s modernist house in the hills of L.A.

<div style="margin-left:-250px; margin-right:-250px">
<a href="{{ site.baseurl }}/assets/images/02.jpg"><img src="{{ site.baseurl }}/assets/images/02.jpg" alt="image" /></a>
</div>


To encompass the variability of all geographic features, we left the background as plain white. This translated to unexpected results as the NN could interpret the same white patch of land as an airport, a maize field, a dumpster, or many other unexpected objects. Curiously, the model of Venice learned to hallucinate fake boats in the canals, where none had been present in the original images! 

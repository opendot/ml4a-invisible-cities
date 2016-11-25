---
layout: page
title: Implementation
subtitle: how it works.
desc: how it works.
permalink: /implementation/
---
We were fascinated by the possibility of generating new and non-existent but realistic images thanks to a neural network that *remembers* a certain set of features from the things it has seen in the past: the same process that we humans undergo when we dream.

### dataset
Taking inspiration from the given examples, we applied a pre-defined color scheme to geographic data ([OpenStreetMap](http://www.openstreetmap.org)) using [Mapbox Studio](https://www.mapbox.com): roads, green spaces, buildings, water were styled with different colours (black, green, red, blue), so that the neural network (NN) could compare these to aerial images and learn the different features.
[mapbox style image]

### training, evaluate, running
We then use [vvvv](https://vvvv.org) as a tool to collect satellite map tiles and generate images to train the network. The training consisted in comparing the output images with a validation set, and then test it on our sketches.

It then produces a set of images according to the unique characteristics of each city: the same blue shade will translate to a venetian canal or a simple river, red will became a 17th century villa or a 50s modernist house in the hills of L.A.

To encompass the variability of all geographic features, we left the background as plain white. This translated to unexpected results as the NN could interpret the same white patch of land as an airport, a maize field or a dumpster.

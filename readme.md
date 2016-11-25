# ml4a-invisible-cities
A project made during "Machine Learning for Artists workshop" with [Gene Kogan](https://github.com/genekogan) @[Opendotlab](http://www.opendotlab.it)

## Concept
“With cities, it is as with dreams: everything imaginable can be dreamed, but even the most unexpected dream is a rebus that conceals a desire or, its reverse, a fear. Cities, like dreams, are made of desires and fears, even if the thread of their discourse is secret, their rules are absurd, their perspectives deceitful, and everything conceals something else.” 
_― [Italo Calvino](https://en.wikipedia.org/wiki/Italo_Calvino), Invisible Cities_

The idea is to create an imaginary city from a hand-drawn sketch. Trained with aerial images of real cities, a neural network can transform this into a realistic bird-eye-view city.
Then, switching between different cities references it would be possible to generate different views of the same imaginary city.
## How it works
Based on the work [Image-to-Image Translation Using Conditional Adversarial Networks](https://github.com/phillipi/pix2pix) by Phillip Isola, Jun-Yan Zhu, Tinghui Zhou, Alexei A. Efros.
Taking inspiration from the given examples, we applied a pre-defined color scheme to geographic data ([OpenStreetMap](http://www.openstreetmap.org)) using [Mapbox Studio](https://www.mapbox.com): roads, green spaces, buildings, water were styled with different colours (black, green, red, blue), so that the neural network could compare these to aerial images and learn the different features.
[mapbox style image]

It then produces a set of images according to the unique characteristics of each city: the same blue shade will translate to a venetian canal or a simple river, red will became a 17th century villa or a 50s modernist house in the hills of L.A.

To encompass the variability of all geographic features, we left the background as plain white. This translated to unexpected results as the NN could interpret the same white patch of land as an airport, a maize field or a dumpster.

## Code
Find the code here.
## Gallery

## Team
---
layout: default
---

_“With cities, it is as with dreams: everything imaginable can be dreamed, but even the most unexpected dream is a rebus that conceals a desire or, its reverse, a fear. Cities, like dreams, are made of desires and fears, even if the thread of their discourse is secret, their rules are absurd, their perspectives deceitful, and everything conceals something else.”_

_― [Italo Calvino](https://en.wikipedia.org/wiki/Italo_Calvino), Invisible Cities_

A project made during "Machine Learning for Artists workshop" with [Gene Kogan](https://github.com/genekogan) @[Opendotlab](http://www.opendotlab.it)

<div style="margin-left:-250px; margin-right:-250px">
<a href="{{ site.baseurl }}/assets/images/02.jpg"><img src="{{ site.baseurl }}/assets/images/02.jpg" alt="image" /></a>
</div>

In this project, we [trained a neural network](/ml4a-invisible-cities/implementation/) to translate map tiles into generative satellite images. We trained individual models for several cities--Milan, Venice, and Los Angeles--allowing us to do city map style transfer (example above) by applying the aerial model of one city onto the map tiles of another.

Also, we can create imaginary cities by hand-drawing sketches and feeding them to the generative model.

<div style="margin-left:-250px; margin-right:-250px">
<a href="{{ site.baseurl }}/assets/main.png"><img src="{{ site.baseurl }}/assets/main.png" alt="image" /></a>
</div>

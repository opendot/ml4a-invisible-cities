---
layout: page
title: Gallery
subtitle: Eye-candy.
desc: Eye-candy.
permalink: /gallery/
---
<!-- {{ site.baseurl }} -->

{::nomarkdown}
### City style transfer

With this technique, we fed map tiles of one city to the generative model of another city, producing sattelite imagery of the former in the style of the latter.

![](./images/03.jpg)
![](./images/04.jpg)
![](./images/05.jpg)

### Imaginary maps

Here we feed completely handdrawn tiles to the models, producing hallucinations of cities.

![](./images/07.jpg)
![](./images/08.jpg)

<div>
{% for image in site.static_files %}
    {% if image.path contains 'images/' %}
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />
    {% endif %}
{% endfor %}

</div>
{:/}

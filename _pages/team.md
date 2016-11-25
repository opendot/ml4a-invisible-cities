---
layout: page
title: Team
subtitle: who what when
desc: who what when
permalink: /team/
---

{::nomarkdown}
<div>
{% for image in site.static_files %}
    {% if image.path contains 'team/' %}

<div class="projects">
  <div class="grid no-gutters">

    <div class="unit one-third">
      <div class="project">
        <h4 class="project-title"><a href="sample-project/">Gene Kogan</a></h4>
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />        
        <p>Laeva clamat qui Perseus erit, discrimine ramos illa <a href="sample-project/">restabat</a>: bracchia, templa, ab spectans. Monte contigit Rhodosque manus mille est omnia eiusdem nondum: qui Modo.</p>

      </div>
    </div>

    <div class="unit one-third">
      <div class="project">
        <h4 class="project-title"><a href="sample-project/">Gabriele Gambotto</a></h4>
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />
        <p><em>Quoque videri</em>: sibi in qua nexibus rapto, Munychiosque bracchia sua pars, iram nec tonitruque. Quisquis thalamis Lyncides e remorum an omnibus monstri dempta. Mea tecta! Orbem haut non procumbit <em>facit</em>.</p>
      </div>
    </div>

    <div class="unit one-third">
      <div class="project">
        <h4 class="project-title"><a href="sample-project/">Ambhika Samsen</a></h4>
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />
        <p>Tumefactum saepe, lactis, sibi ponto ut ad acie nam harundinis nostrae, totiens cerae, quamvis. Et in <strong>sata dies</strong> milite flectitur iste.</p>
      </div>
    </div>
  </div><!-- grid -->

  <div class="grid no-gutters">

    <div class="unit one-third">
      <div class="project">
        <h4 class="project-title"><a href="sample-project/">Andrej Bolesvlasky</a></h4>
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />
        <p>Inpune adsueta ac portasque, esse bella satis; meum arserunt coepit. Anguesque caeleste, dixit: pars nemus igne sedes nigrantis dea omnia.</p>
      </div>
    </div>


    <div class="unit one-third">
      <div class="project">
        <h4 class="project-title"><a href="sample-project/">Michele Ferretti</a></h4>
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />
        <p>Laeva clamat qui Perseus erit, discrimine ramos illa <a href="sample-project/">restabat</a>: bracchia, templa, ab spectans. Monte contigit Rhodosque manus mille est omnia eiusdem nondum: qui Modo.</p>
      </div>
    </div>
    <div class="unit one-third">
      <div class="project">
        <h4 class="project-title"><a href="sample-project/">Damiano Gui</a></h4>
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />
        <p>Laeva clamat qui Perseus erit, discrimine ramos illa <a href="sample-project/">restabat</a>: bracchia, templa, ab spectans. Monte contigit Rhodosque manus mille est omnia eiusdem nondum: qui Modo.</p>
      </div>
    </div>
    <div class="unit one-third">
      <div class="project">
        <h4 class="project-title"><a href="sample-project/">Fabian Frei</a></h4>
        <img src="{{ site.baseurl }}/assets/images/{{ image.name }}" alt="image" />
        <p>Laeva clamat qui Perseus erit, discrimine ramos illa <a href="sample-project/">restabat</a>: bracchia, templa, ab spectans. Monte contigit Rhodosque manus mille est omnia eiusdem nondum: qui Modo.</p>
      </div>
    </div>
  </div><!-- grid -->
</div>

{% endif %}
{% endfor %}

</div>
{:/}

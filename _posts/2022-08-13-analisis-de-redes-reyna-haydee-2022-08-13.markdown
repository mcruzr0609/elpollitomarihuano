---
layout: post
title:  "Análisis de twitter Reyna Haydee"
date:   2022-08-10 08:30:00
categories: analisis
---

  <script src="https://d3js.org/d3-dsv.v1.min.js"></script>
  <script src="https://d3js.org/d3-fetch.v1.min.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
  <link rel="stylesheet" href="../../../css/grafo.css" />
  <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
  <script src="https://virtual-alchemist.com/wp-content/uploads/2020/01/sigma.min_.js"></script>
  <script src="https://virtual-alchemist.com/wp-content/uploads/2020/01/sigma.parsers.gexf_.min_.js"></script>
  <script src="https://virtual-alchemist.com/wp-content/uploads/2020/01/sigma.renderers.parallelEdges.min_.js"></script>

  <section class="node-container">
    <div id="graph-container" class="nodes" style="width:100%;">
      <div id="selected-nodes"></div>
      <div class="node-controls">
      <datalist id="nodes-datalist"></datalist>
        <button type="button" id="zoom-in-button" class="zoom-button zoom-in">+</button>
        <button type="button" id="zoom-out-button" class="zoom-button zoom-out">-</button>
      </div>
    </div>
  </section>
<br>

<script>
  // Initialise sigma with settings
  var s = new sigma({
      renderers: [
        {
          type: 'canvas',
          container: document.getElementById('graph-container'),
          freeStyle: true
        }
      ],
      settings: {
        minNodeSize: .1,
        maxNodeSize: 10,
        minEdgeSize: 0.04,
        maxEdgeSize: 0.2,
        defaultEdgeType: "curve", // only works on canvas renderer
        minArrowSize: 3,
        //labelColor: "node",
        labelHoverBGColor: "default",
        defaultHoverLabelBGColor: "#171c1c",
        defaultLabelHoverColor: "#ddd",
        font: "Poppins",
        drawLabels: true,
        mouseWheelEnabled: true,
        doubleClickEnabled: true,
        touchEnabled: true,
        labelThreshold: 5,
        labelSize: "proportional",
        labelSizeRatio: 2,
        minArrowSize: 10
      },
  });

// Load data to the graph
    sigma.parsers.gexf('../../../assets/posts/reyna-haydee/reyna.gexf', s,
      function (s) {
        s.refresh();

        var zoomInButton = document.getElementById('zoom-in-button');
        zoomInButton.addEventListener("click", zoomIn);
        var zoomOutButton = document.getElementById('zoom-out-button');
        zoomOutButton.addEventListener("click", zoomOut);
      });

    function zoomIn() {
      var c = s.camera;
      c.goTo({
        ratio: c.ratio / c.settings('zoomingRatio')
      });
    }

    function zoomOut() {
      var c = s.camera;
      c.goTo({
        ratio: c.ratio * c.settings('zoomingRatio')
      });
    }
</script>
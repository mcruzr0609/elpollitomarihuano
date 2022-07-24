---
layout: post
title:  "Análisis de twitter política MX [2022-07-23]"
date:   2022-07-23 12:58:29
categories: analisis
---

  <script src="https://d3js.org/d3-dsv.v1.min.js"></script>
  <script src="https://d3js.org/d3-fetch.v1.min.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
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

Número de tweets: 153554 \
Número de nodos: 81838 [550] \
Número de enlaces: 233269 [3805] \

Top:
1.  [@lopezobrador_](https://twitter.com/lopezobrador_)
1.  [@Claudiashein](https://twitter.com/Claudiashein)
1.  [@Hans2412](https://twitter.com/Hans2412)
1.  [@VicenteFoxQue](https://twitter.com/VicenteFoxQue)
1.  [@rynram](https://twitter.com/rynram)

## Análisis del comportamiento temporal de publicación de Tweets.

![temporal](../assets/posts/{{ page.date | date: "%Y-%m-%d" }}/temporal.jpg)

## Hashtags más frecuentes.

![hashtags](../assets/posts/{{ page.date | date: "%Y-%m-%d" }}/hashtags.jpg)

## Palabras más frecuentes.

![words](../assets/posts/{{ page.date | date: "%Y-%m-%d" }}/words.jpg)

## Usuarios que más publicaron.

1.  [@SinEmbargoMX](https://twitter.com/SinEmbargoMX)
1.  [@ZuritaCarpio](https://twitter.com/ZuritaCarpio)
1.  [@TatsumiJorge](https://twitter.com/TatsumiJorge)
1.  [@ELBOTE](https://twitter.com/ELBOTE)
1.  [@AntilopeMalo](https://twitter.com/AntilopeMalo)
1.  [@octaviorabago](https://twitter.com/octaviorabago)
1.  [@inkertatis](https://twitter.com/inkertatis)
1.  [@lopezdoriga](https://twitter.com/lopezdoriga)
1.  [@mario_dico50](https://twitter.com/mario_dico50)
1.  [@sinnosotrosnoh1](https://twitter.com/sinnosotrosnoh1)
1.  [@lajornadaonline](https://twitter.com/lajornadaonline)
1.  [@AaronCo12297111](https://twitter.com/AaronCo12297111)




<style> 
.node-container {
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  height: 600px;
  width: 600px
}

@media only screen and (min-width: 800px) {
  .node-container {
    flex-direction: row;
    padding: 0 50px;
  }
}

.node-container #context-container {
  flex: 1;
  color: #dffcff;
  background-color: #222a2a;
  max-width: 100%;
  border-radius: 20px;
}

.node-container #context-container h4 {
  margin-top: 0;
}

.node-container #context-container .simplebar-scrollbar:before {
  background-color: #fff;
}

.node-container #context-container #context-wrapper {
  max-height: 85vh;
  padding: 20px;
}

.node-container .simplebar-vertical {
  margin: 10px 5px;
}

.node-container .nodes {
  flex: 2;
}

.node-container #graph-container .node-controls {
  display: flex;
  flex-direction: column;
  float: right;
}

.node-container #graph-container input {
  color: #222a2a;
  border: none;
  height: 34px;
  position: relative;
  padding: 0 10px;
  display: block;
  background-color: rgba(255, 255, 255, 0.8);
}

.node-container #selected-nodes {
  position: absolute;
  z-index: 10;
  padding-top: 40px;
}
@media only screen and (min-width: 600px) {
  .node-container #selected-nodes {
    padding-top: 0px;
  }
}

.node-container #selected-nodes .selected-node {
  background-color: #222a2a;
  padding: 3px 10px;
  border-radius: 20px;
  margin: 5px;
  color: #fff;
}

.node-container .zoom-button {
  position: relative;
  cursor: pointer;
  z-index: 10;
  color: #222a2a;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #222a2a;
  align-self: flex-end;
  width: 35px;
  height: 35px;
}

.node-container .zoom-button:hover {
  color: #2e3838;
  background-color: #dffcff;
}

</style>

<script>
var selected = [];

  MiniBarOptions = {
    barType: "default",
    minBarSize: 100,
    alwaysShowBars: true,
  };

  sigma.classes.graph.addMethod('neighbors', function (nodeId) {
    var k,
      neighbors = {},
      index = this.allNeighborsIndex[nodeId] || {};

    for (k in index)
      neighbors[k] = this.nodesIndex[k];

    return neighbors;
  });

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
      maxNodeSize: 2,
      minEdgeSize: 0.1,
      maxEdgeSize: 0.5,
      defaultEdgeType: "curve", // only works on canvas renderer
      minArrowSize: 3,
      //labelColor: "node",
      labelHoverBGColor: "default",
      defaultHoverLabelBGColor: "#171c1c",
      defaultLabelHoverColor: "#fff",
      font: "Poppins",
      drawLabels: true,
      mouseWheelEnabled: true,
      doubleClickEnabled: true,
      touchEnabled: true,
      labelThreshold: 3
    },
  });

// Load data to the graph
    sigma.parsers.gexf('../assets/posts/{{ page.date | date: "%Y-%m-%d" }}/filter_net.gexf', s,
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
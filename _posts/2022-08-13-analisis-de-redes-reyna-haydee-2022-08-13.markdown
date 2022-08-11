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
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js" integrity="sha256-+8RZJua0aEWg+QVVKg4LEzEEm/8RFez5Tb4JBNiV5xA=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@1.2.1/dist/chartjs-plugin-zoom.min.js" integrity="sha256-cRtVj62HOT1M3EGc+4EBacU/38hYsYrNBB48zEVn8uU=" crossorigin="anonymous"></script>

<style>
  .reset-zoom {
    display: none;
}
</style>

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

## Test.

<canvas id="myChart" width="400" height="400"></canvas>
<button id="reset_zoom" class="reset-zoom">
    Reset zoom
</button>

<script>
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: '#',
            data: [{x: '2022-07-21 07:00:00', y: 7}, {x: '2022-07-21 08:00:00', y: 1}, {x: '2022-07-21 09:00:00', y: 2}, {x: '2022-07-21 10:00:00', y: 683}, {x: '2022-07-21 11:00:00', y: 1521}, {x: '2022-07-21 12:00:00', y: 1789}, {x: '2022-07-21 13:00:00', y: 1732}, {x: '2022-07-21 14:00:00', y: 1446}, {x: '2022-07-21 15:00:00', y: 1356}, {x: '2022-07-21 16:00:00', y: 1693}, {x: '2022-07-21 17:00:00', y: 1908}, {x: '2022-07-21 18:00:00', y: 1996}, {x: '2022-07-21 19:00:00', y: 2018}, {x: '2022-07-21 20:00:00', y: 2366}, {x: '2022-07-21 21:00:00', y: 2487}, {x: '2022-07-21 22:00:00', y: 2209}, {x: '2022-07-21 23:00:00', y: 2019}, {x: '2022-07-22 00:00:00', y: 1279}, {x: '2022-07-22 01:00:00', y: 691}, {x: '2022-07-22 02:00:00', y: 459}, {x: '2022-07-22 03:00:00', y: 232}, {x: '2022-07-22 04:00:00', y: 218}, {x: '2022-07-22 05:00:00', y: 291}, {x: '2022-07-22 06:00:00', y: 602}, {x: '2022-07-22 07:00:00', y: 786}, {x: '2022-07-22 08:00:00', y: 1296}, {x: '2022-07-22 09:00:00', y: 1359}, {x: '2022-07-22 10:00:00', y: 1337}, {x: '2022-07-22 11:00:00', y: 1456}, {x: '2022-07-22 12:00:00', y: 1407}, {x: '2022-07-22 13:00:00', y: 1246}, {x: '2022-07-22 14:00:00', y: 1095}, {x: '2022-07-22 15:00:00', y: 937}, {x: '2022-07-22 16:00:00', y: 879}, {x: '2022-07-22 17:00:00', y: 809}, {x: '2022-07-22 18:00:00', y: 858}, {x: '2022-07-22 19:00:00', y: 684}, {x: '2022-07-22 20:00:00', y: 658}, {x: '2022-07-22 21:00:00', y: 684}, {x: '2022-07-22 22:00:00', y: 587}, {x: '2022-07-22 23:00:00', y: 433}, {x: '2022-07-23 00:00:00', y: 332}, {x: '2022-07-23 01:00:00', y: 157}, {x: '2022-07-23 02:00:00', y: 90}, {x: '2022-07-23 03:00:00', y: 77}, {x: '2022-07-23 04:00:00', y: 71}, {x: '2022-07-23 05:00:00', y: 71}, {x: '2022-07-23 06:00:00', y: 124}, {x: '2022-07-23 07:00:00', y: 208}, {x: '2022-07-23 08:00:00', y: 339}, {x: '2022-07-23 09:00:00', y: 332}, {x: '2022-07-23 10:00:00', y: 405}, {x: '2022-07-23 11:00:00', y: 356}, {x: '2022-07-23 12:00:00', y: 386}, {x: '2022-07-23 13:00:00', y: 316}, {x: '2022-07-23 14:00:00', y: 276}, {x: '2022-07-23 15:00:00', y: 256}, {x: '2022-07-23 16:00:00', y: 221}, {x: '2022-07-23 17:00:00', y: 275}, {x: '2022-07-23 18:00:00', y: 238}, {x: '2022-07-23 19:00:00', y: 209}, {x: '2022-07-23 20:00:00', y: 185}, {x: '2022-07-23 21:00:00', y: 233}, {x: '2022-07-23 22:00:00', y: 251}, {x: '2022-07-23 23:00:00', y: 193}],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
  options: {
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            limits: {
              y: {min: 0, max: 10},
              x: {min: 0, max: 5}
            },
            pinch: {
              enabled: true
            },
            mode: 'xy'
          }
        }
      }
    }
});

$('#reset_zoom').click(function(){
    myChart.resetZoom(); 
});
</script>

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
        labelThreshold: 3,
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
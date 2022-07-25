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
      labelThreshold: 1,
      labelSize: "proportional",
      labelSizeRatio: 2,
      minArrowSize: 10
    },
});
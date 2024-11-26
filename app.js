// Load A-Frame and AR.js scripts dynamically
const aframeScript = document.createElement('script');
aframeScript.src = 'https://aframe.io/releases/1.2.0/aframe.min.js';
document.head.appendChild(aframeScript);

const arjsScript = document.createElement('script');
arjsScript.src = 'https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar-nft.js';
document.head.appendChild(arjsScript);

// Wait until the libraries are loaded to set up the scene
aframeScript.onload = () => {
  arjsScript.onload = () => {
    // Create the A-Frame scene
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', 'sourceType: webcam; videoTexture: true; debugUIEnabled: false;');
    scene.setAttribute('vr-mode-ui', 'enabled: false');
    document.body.appendChild(scene);

    // Create the marker using a custom pattern file
    const marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('url', 'markers/pattern-module1.patt');  // Replace with your custom marker path
    scene.appendChild(marker);

    // Add a red sphere to the marker
    const sphere = document.createElement('a-sphere');
    sphere.setAttribute('position', '0 0.1 0');
    sphere.setAttribute('radius', '0.1');
    sphere.setAttribute('color', 'red');
    sphere.setAttribute('id', 'interactiveSphere');
    marker.appendChild(sphere);

    // Add feedback text, initially empty
    const feedbackText = document.createElement('a-text');
    feedbackText.setAttribute('value', '');
    feedbackText.setAttribute('position', '0 0.5 0');
    feedbackText.setAttribute('color', 'black');
    feedbackText.setAttribute('scale', '2 2 2');
    feedbackText.setAttribute('id', 'feedbackText');
    marker.appendChild(feedbackText);

    // Create the AR camera and cursor (invisible)
    const camera = document.createElement('a-entity');
    camera.setAttribute('camera', '');
    scene.appendChild(camera);

    const cursor = document.createElement('a-cursor');
    cursor.setAttribute('visible', 'false');  // Hide default black circle cursor
    camera.appendChild(cursor);

    // JavaScript for handling interactions
    sphere.addEventListener('click', () => {
      feedbackText.setAttribute('value', 'Well done!');
      feedbackText.setAttribute('color', 'green');
    });

    // Optional: Clear feedback text when not clicked
    feedbackText.addEventListener('raycaster-intersected-cleared', () => {
      feedbackText.setAttribute('value', '');
    });
  };
};

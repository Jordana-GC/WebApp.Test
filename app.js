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
    const marker1 = document.createElement('a-marker');
    marker1.setAttribute('type', 'pattern');
    marker1.setAttribute('url', 'markers\pattern-Module-1.patt');
    scene.appendChild(marker1);

    // Add a sphere to the marker
    const sphere1 = document.createElement('a-sphere');
    sphere1.setAttribute('position', '0 0.1 0');
    sphere1.setAttribute('radius', '0.1');
    sphere1.setAttribute('color', 'red');
    sphere1.setAttribute('id', 'interactiveSphere1');
    marker1.appendChild(sphere1);

     // Create the marker using a custom pattern file
     const marker2 = document.createElement('a-marker');
     marker2.setAttribute('type', 'pattern');
     marker2.setAttribute('url', 'markers\pattern-Module-2.patt');
     scene.appendChild(marker2);
 
     // Add a sphere to the marker
     const sphere2 = document.createElement('a-sphere');
     sphere2.setAttribute('position', '0 0.1 0');
     sphere2.setAttribute('radius', '0.1');
     sphere2.setAttribute('color', 'green');
     sphere2.setAttribute('id', 'interactiveSphere2');
     marker2.appendChild(sphere2);

     // Create the marker using a custom pattern file
     const marker3 = document.createElement('a-marker');
     marker3.setAttribute('type', 'pattern');
     marker3.setAttribute('url', 'markers\pattern-Module-3.patt');
     scene.appendChild(marker3);
 
     // Add a sphere to the marker
     const sphere3 = document.createElement('a-sphere');
     sphere3.setAttribute('position', '0 0.1 0');
     sphere3.setAttribute('radius', '0.1');
     sphere3.setAttribute('color', 'pink');
     sphere3.setAttribute('id', 'interactiveSphere3');
     marker3.appendChild(sphere3);
     
     // Create the marker using a custom pattern file
     const marker4 = document.createElement('a-marker');
     marker4.setAttribute('type', 'pattern');
     marker4.setAttribute('url', 'markers\pattern-Module-4.patt');
     scene.appendChild(marker4);
 
     // Add a sphere to the marker
     const sphere4 = document.createElement('a-sphere');
     sphere4.setAttribute('position', '0 0.1 0');
     sphere4.setAttribute('radius', '0.1');
     sphere4.setAttribute('color', 'black');
     sphere4.setAttribute('id', 'interactiveSphere4');
     marker4.appendChild(sphere4);

    // Add feedback text, initially empty
    const feedbackText = document.createElement('a-text');
    feedbackText.setAttribute('value', '');
    feedbackText.setAttribute('position', '0 0.5 0');
    feedbackText.setAttribute('color', 'black');
    feedbackText.setAttribute('scale', '2 2 2');
    feedbackText.setAttribute('id', 'feedbackText');
    marker1.appendChild(feedbackText);

    // Create the AR camera and cursor (invisible)
    const camera = document.createElement('a-entity');
    camera.setAttribute('camera', '');
    scene.appendChild(camera);

    const cursor = document.createElement('a-cursor');
    cursor.setAttribute('visible', 'false');  // Hide default black circle cursor
    camera.appendChild(cursor);

    // JavaScript for handling interactions
    sphere1.addEventListener('click', () => {
      feedbackText.setAttribute('value', 'Well done!');
      feedbackText.setAttribute('color', 'green');
    });

    // Optional: Clear feedback text when not clicked
    feedbackText.addEventListener('raycaster-intersected-cleared', () => {
      feedbackText.setAttribute('value', '');
    });
  };
};

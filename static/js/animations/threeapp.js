import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader'

// import '../../assets/scene.bin'
import modelPath from '../../assets/scene.gltf'


import $ from 'jquery'


$(function(){

    // Creating Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0x1e1e1e,1 ,15);
    
    // Scene gridHelper
    // const gridHelper = new THREE.GridHelper(20, 20);
    // scene.add(gridHelper);

    // Scene axesHelper
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);


    // Creating Lights:
    // Ambient Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    ambientLight.position.set(5, 10, 7.5);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Point Light
    const pointLight = new THREE.PointLight(0xff0000, 1, 50);
    pointLight.position.set(2,5,5);
    scene.add(pointLight);

    // Spot Light
    const spotLight = new THREE.SpotLight(0x0000ff, 0.5, 100, Math.PI / 6, 0.5, 1);
    spotLight.position.set(-5, 10, 5);
    // scene.add(spotLight);


    // Creating Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    camera.position.z = 5;

    // Creating Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // Adding models using loader.
    const loader = new GLTFLoader();
    let mixer;
    
    loader.load(
        modelPath,
        (gltf) => {

            const model = gltf.scene;
            scene.add(model);
        
        },
        
        undefined,
        
        (error) => {
        
            console.log("Error: ", error);
        
        }
    );

    // Creating and adding cude.
    const geometry = new THREE.BoxGeometry();
    const basicmaterial = new THREE.MeshBasicMaterial({ color: 0x8A80FF });
    const standardmaterial = new THREE.MeshStandardMaterial( {
        
        color: 0x8A80FF,
        roughness: 0.5,
        metalness: 0.1

    } )
    const phongmaterial = new THREE.MeshPhongMaterial( {
        color: 0xB1AAFF,
        shininess: 100
    } )
    const cube = new THREE.Mesh(geometry, phongmaterial);

    // Adding Cube.
    scene.add(cube)

    // Creating and adding plane.
    const planegeometry = new THREE.PlaneGeometry(20, 20);
    const planematerial = new THREE.MeshBasicMaterial({ color: 0xB1AAFF });
    const plane = new THREE.Mesh(planegeometry, planematerial)
    
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1

    // Adding plane.
    scene.add(plane)
    

    // Animate function.
    function animate(){

        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)


    }

    animate();

})
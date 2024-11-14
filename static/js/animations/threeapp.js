import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader'

import modelPath from '../../assets/scene.gltf'


import $ from 'jquery'


$(function(){

    // Creating Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Scene gridHelper
    // const gridHelper = new THREE.GridHelper(20, 20);
    // scene.add(gridHelper);

    // Scene axesHelper
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);


    // Creating Lights:
    // Ambient Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    ambientLight.position.set(5, 10, 7.5);
    // scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 0, -10);
    scene.add(directionalLight);

    // Point Light
    const pointLight = new THREE.PointLight(0x60efff, 50, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x0061ff, 50, 20);
    pointLight2.position.set(-5, 5, 5);
    scene.add(pointLight2);

    // Spot Light
    const spotLight = new THREE.SpotLight(0xFFCE06, 2, 25, Math.PI / 6, 0.5, 1);
    spotLight.position.set(0, -5, 5);
    scene.add(spotLight);


    // Creating Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    camera.position.z = 5;

    // Creating Renderer
    const renderer = new THREE.WebGLRenderer( {
        
        antialias: true
    
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Canvas Rendering
    const canvas = document.getElementById('canvas');
    canvas.appendChild( renderer.domElement );


    // Adding models using loader.
    const loader = new GLTFLoader();
    let model;


    loader.load(

        modelPath,
        
        (gltf) => {

            model = gltf.scene;
            model.scale.set(0.04, 0.04, 0.04);

            scene.add(model);

            model.position.set(0, -4, -7);
        
        },
        
        undefined,
        
        (error) => {
        
            console.log("Error: ", error);
        
        }
    );

    // Creating and adding Cuboid:
    const cubegeometry = new THREE.SphereGeometry(1, 5, 5);
    const cubepointmaterial = new THREE.PointsMaterial({

        size: 0.15,
        color: 0xfff95b,

    })

    const cubegeometryblue = new THREE.SphereGeometry(1, 5, 5);
    const cubepointmaterialblue = new THREE.PointsMaterial({

        size: 0.09,
        color: 0x60efff,

    })

    const cuboid3Points = new THREE.Points( cubegeometryblue, cubepointmaterialblue )

    cuboid3Points.scale.set(9.5 , 9.5, 9.5);
    cuboid3Points.position.set(0 , 2, -7);


    const cuboidPoints = new THREE.Points( cubegeometry, cubepointmaterial )

    cuboidPoints.scale.set(9.5 , 9.5, 9.5);
    cuboidPoints.position.set(0 , 2, -7);

    const cuboid2Points = cuboidPoints.clone();

    scene.add( cuboidPoints, cuboid2Points, cuboid3Points );

    // Animate function.
    function animate(){

        requestAnimationFrame(animate)
        


        cuboidPoints.rotation.x += 0.001;
        cuboidPoints.rotation.y += 0.001;

        cuboid2Points.rotation.x -= 0.001;
        cuboid2Points.rotation.y -= 0.001;

        cuboid3Points.rotation.x -= 0.001;
        cuboid3Points.rotation.z -= 0.001;

        if (model){
    
            model.rotation.y += 0.001;
            
        
        }

        renderer.render(scene, camera)


    }

    animate();

})
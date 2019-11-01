export default {
    template: `
        <a-entity class="floor" shadow="recieve: true">
            <a-plane material="visible: false" position="0 -0.01 4" rotation="-90 0 0"  nav-mesh width="19" height="19"></a-plane>
            <a-plane
            static-body
            material="src: ./assets/textures/floor.jpg; repeat: 2 4" 
            rotation="-90 0 0" 
            width="20" 
            height="20"
            ></a-plane>
        </a-entity>
    `
}
export default {
  mounted() {
    AFRAME.registerComponent('listener', {
      tick: function () {}
    });
  },
  template: `
        <a-entity id="rig" movement-controls="constrainToNavMesh: true;" position="0 0 0">
          <a-camera position="0 1.6 0" listener fov="80" look-controls="pointerLockEnabled: true;" wasd-controls="false">
              <a-entity 
                cursor="fuse:true, fuseTimeout: 50;" raycaster="far: 10; objects: .hover"
                position="0 0 -1"
                geometry="primitive: circle; radius: 0.005;"
                material="color: white; shader: flat; opacity: 0.5"
                >
              </a-entity>
              <slot />
          </a-camera>
          <a-entity position="0 0 4" oculus-go-controls="model: false"></a-entity>
          <a-entity laser-controls="hand: right"></a-entity>
        </a-entity>
    `
};

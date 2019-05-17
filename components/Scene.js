export default {
    template: `
        <a-scene>
          <slot name="assets" />
          <a-entity position="0 0 -4">
            <slot />
            <a-sky color="yellow"></a-sky>
          </a-entity>
        </a-scene>
    `
}
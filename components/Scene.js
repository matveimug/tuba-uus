export default {
    template: `
        <a-scene physics="debug: true">
          <slot name="assets" />
          <a-entity position="0 0 -4">
            <slot />
          </a-entity>
        </a-scene>
    `
}
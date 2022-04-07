import { defineComponent } from 'vue'
export const Second = defineComponent({
  setup(props, context) {
    return () => (
      <div>
        <h1>Second</h1>
      </div>
    )
  },
})

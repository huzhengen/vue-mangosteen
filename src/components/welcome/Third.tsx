import { defineComponent } from 'vue'
export const Third = defineComponent({
  setup(props, context) {
    return () => (
      <div>
        <h1>Third</h1>
      </div>
    )
  },
})

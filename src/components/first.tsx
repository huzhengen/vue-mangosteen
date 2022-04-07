import { defineComponent } from 'vue'
export const First = defineComponent({
  setup(props, context) {
    return () => (
      <div>
        <h1>First</h1>
      </div>
    )
  },
})

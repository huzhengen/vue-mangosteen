import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
export const First = defineComponent({
  setup(props, context) {
    return () => (
      <>
        <div>First</div>
      </>
    )
  },
})

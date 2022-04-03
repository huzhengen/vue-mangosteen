import { defineComponent, ref } from 'vue'

export const App = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    const onClick = () => {
      increment()
    }
    return () => (
      <>
        <h1>Hello APP {count.value}{props.name}</h1>
        <button onClick={onClick}>点击加1</button>
      </>
    )
  },
})

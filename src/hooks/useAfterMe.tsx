import { onMounted } from "vue"
import { useMeStore } from "../stors/useMeStore"

export const useAfterMe = (fn: () => void) => {
  const meStore = useMeStore()
  onMounted(async () => {
    try {
      await meStore.mePromise
    } catch (e) {
      return e
    }
    fn()
  })
}
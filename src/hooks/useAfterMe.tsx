import { onMounted } from "vue"
import { useMeStore } from "../stors/useMeStore"

export const useAfterMe = (fn: () => void) => {
  const meStore = useMeStore()
  onMounted(() => meStore.mePromise!.then(fn, () => undefined))
}
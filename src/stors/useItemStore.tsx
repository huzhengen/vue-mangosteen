import { defineStore } from "pinia"
import { http } from "../shared/Http"

type ItemState = {
  items: Item[],
  hasMore: boolean,
  page: number,
}

type ItemActions = {
  reset: () => void
  fetchItems: (startDate?: string, endDate?: string) => void
}

export const useItemStore = (id: string | string[]) =>
  defineStore<string, ItemState, {}, ItemActions>(typeof id === 'string' ? id : id.join('-'), {
    state: () => ({
      items: [],
      hasMore: false,
      page: 0,
    }),
    actions: {
      reset() {
        this.items = []
        this.hasMore = false
        this.page = 0
      },
      async fetchItems(startDate, endDate) {
        if (!startDate || !endDate) { return }
        const response = await http.get<Resources<Item>>('/items', {
          happen_after: startDate,
          happen_before: endDate,
          page: this.page + 1,
        }, {
          _autoLoading: true,
          _mock: 'itemIndex',
        })
        const { resources, pager } = response.data
        this.items.push(...resources)
        this.hasMore = (pager.page - 1) * pager.per_page + resources.length < pager.count
        this.page += 1
      }
    },
  })()
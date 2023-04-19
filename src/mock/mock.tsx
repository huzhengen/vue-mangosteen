import { faker } from '@faker-js/faker'
import { AxiosRequestConfig } from 'axios';

type Mock = (config: AxiosRequestConfig) => [number, any]

faker.setLocale('zh_CN');

export const mockItemSummary: Mock = (config) => {
  const { group_by, kind } = config.params
  if (group_by === 'happened_at' && kind === 'expenses') {
    return [
      200,
      {
        groups: [
          { "happen_at": "2023-04-18T00:00:00.000+0800", "amount": 100 },
          { "happen_at": "2023-04-22T00:00:00.000+0800", "amount": 300 },
          { "happen_at": "2023-04-23T00:00:00.000+0800", "amount": 200 },
          { "happen_at": "2023-04-24T00:00:00.000+0800", "amount": 400 },
          { "happen_at": "2023-04-25T00:00:00.000+0800", "amount": 300 },
        ],
        summary: 1300
      }
    ]
  } else if (group_by === 'happened_at' && kind === 'income') {
    return [
      200,
      {
        groups: [
          { "happen_at": "2023-04-01T00:00:00.000+0800", "amount": 100 },
          { "happen_at": "2023-04-05T00:00:00.000+0800", "amount": 300 },
          { "happen_at": "2023-04-10T00:00:00.000+0800", "amount": 200 },
          { "happen_at": "2023-04-13T00:00:00.000+0800", "amount": 400 },
          { "happen_at": "2023-04-15T00:00:00.000+0800", "amount": 300 },
        ],
        summary: 1300
      }
    ]
  } else if (group_by === 'tag_id' && kind === 'expenses') {
    return [
      200,
      {
        groups: [
          { tag_id: 1, tag: { id: 1, name: '交通', sign: faker.internet.emoji() }, amount: 100 },
          { tag_id: 2, tag: { id: 2, name: '吃饭', sign: faker.internet.emoji() }, amount: 300 },
          { tag_id: 3, tag: { id: 3, name: '购物', sign: faker.internet.emoji() }, amount: 200 },
          { tag_id: 1, tag: { id: 1, name: '地铁', sign: faker.internet.emoji() }, amount: 400 },
          { tag_id: 2, tag: { id: 2, name: '电脑', sign: faker.internet.emoji() }, amount: 500 },
          { tag_id: 3, tag: { id: 3, name: '手机', sign: faker.internet.emoji() }, amount: 600 }
        ],
        summary: 2100
      }
    ]
  } else {
    return [
      200,
      {
        groups: [
          { tag_id: 1, tag: { id: 1, name: '收入1', sign: faker.internet.emoji() }, amount: 5000 },
          { tag_id: 2, tag: { id: 2, name: '收入2', sign: faker.internet.emoji() }, amount: 2000 },
          { tag_id: 3, tag: { id: 3, name: '收入3', sign: faker.internet.emoji() }, amount: 3000 },
          { tag_id: 1, tag: { id: 1, name: '收入4', sign: faker.internet.emoji() }, amount: 4000 },
          { tag_id: 2, tag: { id: 2, name: '收入5', sign: faker.internet.emoji() }, amount: 5000 },
          { tag_id: 3, tag: { id: 3, name: '收入6', sign: faker.internet.emoji() }, amount: 6000 }
        ],
        summary: 25000
      }
    ]
  }
}

export const mockItemIndexBalance: Mock = config => {
  return [200, {
    expenses: 9900,
    income: 9900,
    balance: 0
  }]
}

export const mockItemIndex: Mock = (config) => {
  const { kind, page } = config.params
  const per_page = 25
  const count = 26
  const createPaper = (page = 1) => ({
    page,
    per_page,
    count,
  })
  const createTag = (attrs?: any) =>
  ({
    id: createId(),
    name: faker.lorem.word(),
    sign: faker.internet.emoji(),
    kind: 'expenses',
    ...attrs
  })
  const createItem = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(() => ({
      id: createId(),
      user_id: createId(),
      amount: Math.floor(Math.random() * 100000),
      tags_id: [createId()],
      tags: [createTag()],
      happen_at: faker.date.past().toISOString(),
      kind: config.params.kind,
    }))
  const createBody = (n = 1, attrs?: any) => ({
    resources: createItem(n),
    pager: createPaper(page),
  })
  if (!page || page === 1) {
    return [200, createBody(25)]
  } else if (page === 2) {
    return [200, createBody(1)]
  } else {
    return [200, {}]
  }
}

export const mockTagEdit: Mock = config => {
  const createTag = (attrs?: any) =>
  ({
    id: createId(),
    name: faker.lorem.word(),
    sign: faker.internet.emoji(),
    kind: 'expenses',
    ...attrs
  })
  return [200, { resource: createTag() }]
}

export const mockTagShow: Mock = config => {
  const createTag = (attrs?: any) =>
  ({
    id: createId(),
    name: faker.lorem.word(),
    sign: faker.internet.emoji(),
    kind: 'expenses',
    ...attrs
  })
  return [200, { resource: createTag() }]
}

export const mockItemCreate: Mock = config => {
  return [200, {
    resource: {
      "id": 2264,
      "user_id": 1312,
      "amount": 9900,
      "note": null,
      "tags_id": [3508],
      "happen_at": "2023-03-03T16:00:00.000Z",
      "created_at": "2023-03-03T15:35:56.301Z",
      "updated_at": "2023-03-03T15:35:56.301Z",
      "kind": "expenses"
    }
  }]
}

export const mockSession: Mock = (config) => {
  return [200, {
    jwt: faker.random.word()
  }]
}

let id = 0
const createId = () => {
  id += 1
  return id
}

export const mockTagIndex: Mock = (config) => {
  const { kind, page } = config.params
  const per_page = 25
  const count = 26

  const createPaper = (page = 1) => ({
    page, per_page, count
  })

  const createTag = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(() => ({
      id: createId(),
      name: faker.lorem.word(),
      sign: faker.internet.emoji(),
      kind: config.params.kind,
      ...attrs
    }))

  const createBody = (n = 1, attrs?: any) => ({
    resources: createTag(n), pager: createPaper(page)
  })

  if (kind === 'expenses' && (!page || page === 1)) {
    return [200, createBody(25)]
  } else if (kind === 'expenses' && page === 2) {
    return [200, createBody(1)]
  } else if (kind === 'income' && (!page || page === 1)) {
    return [200, createBody(25)]
  } else {
    return [200, createBody(1)]
  }

}


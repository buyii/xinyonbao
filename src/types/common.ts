export interface Item {
  id: number
  name: string
  icon?: string
}

export interface TabsProps {
  itemList: Item[] // tabs列表
  modelValue?: number // 当前选中tab的索引
}

export interface ProductItem {
  id: number
  introduce: string // 商品介绍
  frontCover: string // 商品封面
  price: number // 商品价格
  kickback: number // 商品佣金
  kickbackRate: number // 商商品佣金比例
  kickbackRate1: number // 商品佣金比例
  subsidyRate: number // 商品补贴比例
  subsidy: number // 商品补贴金额
}

export interface Product {
  productList: ProductItem[] // tabs列表
}

export interface SelectionType {
  label: string // 选择框的名称
}

export interface SelectionTabList {
  label: string // 选择框的名称
  tabList: Item[]
}

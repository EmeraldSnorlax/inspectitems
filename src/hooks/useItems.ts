import { useState } from 'react'
import data from 'items.json'
export function useItems() {
  const [items] = useState(
    data.map((item) => ({
      lock: item.lock,
      classid: item.classid,
      price: item.salePrice,
      suggestedPrice: item.suggestedPrice,
      title: item.title,
      wear: item.wear,
      text: item.text,
      name: item.name,
      color: item.color,
      inspect: item.inspectLink,
      itemid: item.itemId,
      pattern: item.assetId,
    }))
  )

  return { items }
}

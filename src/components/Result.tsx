import React from 'react'

type Item = { Item: { itemUrl: string; itemName: string; itemPrice: number } }

const Result: React.FC<{ resultList: Item[] }> = (props) => {
  const { resultList } = props
  return (
    <ul>
      {resultList.length > 0 &&
        resultList.map(({ Item }, index) => {
          return (
            <li key={index} className="my-2 py-2">
              <a href={Item.itemUrl} className="block hover:bg-gray-100 py-3 px-2 rounded-sm">
                {Item.itemName} / ¥{Item.itemPrice}
              </a>
            </li>
          )
        })}
    </ul>
  )
}

export default Result

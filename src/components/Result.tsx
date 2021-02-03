import React from 'react'

type Item = { Item: { itemUrl: string; itemName: string; itemPrice: number } }

const Result: React.FC<{ resultList: Item[] }> = (props) => {
  const { resultList } = props
  return (
    <ul>
      {resultList.length > 0 &&
        resultList.map(({ Item }, index) => {
          return (
            <li key={index}>
              <a href={Item.itemUrl}>
                {Item.itemName} / ¥${Item.itemPrice}
              </a>
            </li>
          )
        })}
    </ul>
  )
}

export default Result

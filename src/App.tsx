import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as dotenv from 'dotenv'
import Search from './components/Search'
import Result from './components/Result'

dotenv.config()

const baseUrl = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&'
const appId = process.env.RAKUTEN_APP_ID

type Item = { Item: { itemUrl: string; itemName: string; itemPrice: number } }

const App = () => {
  const [inputText, setInputText] = useState('')
  const [resultList, setResultList] = useState<Item[]>([])

  const submitText = (text: string) => {
    setInputText(text)
  }

  const getRokutenList = (key: string) => {
    const url = `${baseUrl}${appId}&keyword=${key}`

    return axios.get<{ Items: Item[] }>(url).then((response) => {
      return response.data.Items
    })
  }

  useEffect(() => {
    if (inputText) {
      ;(async () => {
        const list = await getRokutenList(inputText)
        setResultList(list)
      })()
    }
  }, [inputText])

  return (
    <div className="App container mx-auto">
      <Search submitText={(text: string) => submitText(text)} />
      {resultList.length > 0 && <Result resultList={resultList} />}
    </div>
  )
}

export default App

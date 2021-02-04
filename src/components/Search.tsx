import React, { useRef } from 'react'

const Search: React.FC<{ submitText: Function }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const input = inputRef.current ? inputRef.current.value : ''
    e.preventDefault()
    if (input) props.submitText(input)
  }

  return (
    <>
      <form className="flex mx-auto mt-4" onSubmit={handleSubmit}>
        <input className="border-blue-600 border-2  px-3" type="text" name="" ref={inputRef} />
        <button className="px-3 py-2 bg-blue-600 rounded-md text-white ml-4">検索</button>
      </form>
    </>
  )
}

export default Search

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
      <form onSubmit={handleSubmit}>
        <input type="text" name="" ref={inputRef} />
        <button>検索</button>
      </form>
    </>
  )
}

export default Search

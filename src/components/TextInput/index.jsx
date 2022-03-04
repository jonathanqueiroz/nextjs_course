import './styles.css'

export const TextInput = ({ inputValue, actionFn }) => {
  return (
    <input
      className='text-input'
      type="search"
      onChange={actionFn}
      value={inputValue}
    />
  )
}

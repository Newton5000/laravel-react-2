const TextInput = ({ inputValue, type, classes, handleChange }) => {
        return (
               <>
                   <input className={classes + " h-10 p-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"}
                          type={type}
                          value={inputValue}
                          onChange={handleChange}
                   />
               </>
        )
}
export default TextInput

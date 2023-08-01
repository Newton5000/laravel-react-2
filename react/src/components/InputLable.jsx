const InputLabel = ({ value }) => {
    if(value) {
        return (
            <>
                <label className="block font-medium text-sm text-gray-700">
                    <span>{value}</span>
                </label>
            </>
        )
    }
}
export default InputLabel

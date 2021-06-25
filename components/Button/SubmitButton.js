const SubmitButton = ({ onClick, text, disabled }) => {
    return (
      <button
        className="px-5 py-3 rounded-xl text-sm font-medium text-white bg-gray-500 hover:bg-gray-700 focus:outline-none w-full transition-all disabled:opacity-20"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
  
  export default SubmitButton;
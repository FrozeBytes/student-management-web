const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="uppercase mr-5 p-3 flex items-center bg-gray-500 hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10"
      onClick={onClick}
    >
      <svg
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path d="M12 12h2v12h-2z" fill="currentColor"></path>
        <path d="M18 12h2v12h-2z" fill="currentColor"></path>
        <path
          d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
          fill="currentColor"
        ></path>
        <path d="M12 2h8v2h-8z" fill="currentColor"></path>
      </svg>
    </button>
  )
}

export default DeleteButton;
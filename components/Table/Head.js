const Head = ({ columns }) => {
  return (
    <thead>
      { columns.map((column, i) => 
        (
          <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal" key={i}>
            <th className="py-3 px-6 text-left">{column}</th>
          </tr>
        )
      )}
    </thead>
  )
}

export default Head;
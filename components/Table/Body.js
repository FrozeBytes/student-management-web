import TableRow from './Row';

const Body = ({ rows }) => {
  return (
    <tbody className="text-gray-600 flex flex-col text-sm font-light overflow-y-scroll max-h-96">
      {
        rows.length === 0 &&
        <TableRow />
      }
      {
        rows.map((row, i) => (
          <TableRow
            data-testid={`tbl-row=-${i}`}
            data={row}
            index={i}
            key={i}
          />
        ))
      }
    </tbody>
  )
}

export default Body;
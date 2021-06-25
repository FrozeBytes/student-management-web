import TableHead from './Head';
import TableBody from './Body';

const Table = ({ columns, rows }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen md:min-h-screen flex items-center justify-center font-sans">
        <div className="w-full lg:w-5/6">
          <div className="bg-white md:shadow-lg rounded my-6">
            <table className="min-w-max w-full table-auto">
              <TableHead columns={columns}/>
              <TableBody rows={rows} />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;
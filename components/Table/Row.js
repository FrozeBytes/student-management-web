import Image from 'next/image'

const Row = ({ data, index }) => {

  const Profile = () => {
    const gender = (index + 1) % 2 === 0 ? 'men' : 'women';
    return (
      <div className="mr-2">
        <Image className="w-8 h-8 rounded-full" src={`https://randomuser.me/api/portraits/${gender}/${index}.jpg`}/>
      </div>
    )
  }

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          { data &&
            <Profile />
          }
          <span className="font-medium">{data ?? 'No students found'}</span>
        </div>
      </td>
    </tr>
  )
}

export default Row;
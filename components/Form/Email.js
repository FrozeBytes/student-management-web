import DeleteButton from './../Button/DeleteButton';

const Email = ({ email, removeCB }) => {
  return (
    <div>
      <div className="flex mt-4">
        <h1 className="w-full text-gray-600 text-lg mb-1">{email}</h1>
        <DeleteButton
          data-testid={`form-delete-email-btn-${email}`}
          onClick={() => removeCB(email)}
        />
      </div>
    </div>
  )
}

export default Email;
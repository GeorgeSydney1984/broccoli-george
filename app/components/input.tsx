type InputProps = {
  type: string,
  required?: boolean, 
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export function Input({ type, required = false, placeholder, onChange }: InputProps) {
  return (
    <input
      type={type}
      className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  )
}
import { Procesing } from "@components/icons/processing";

type ButtonProps = {
  text?: string;
  type: "primary" | "secondary" | "alert";
  domType?: "button" | "submit";
  disabled?: boolean;
  asyncProcessing?: boolean;
  onClick?: () => Promise<void> | void,
}

const buttonClassName = {
  "primary": "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none",
  "secondary": "bg-gray-200 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200",
  "alert": "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700",
}

export function Button({ text = "click me", type, domType="button", disabled, asyncProcessing, onClick }: ButtonProps) {
  return (
    <button
      type={domType}
      className={asyncProcessing ? buttonClassName.secondary: buttonClassName[type]}
      onClick={onClick}
      disabled={disabled || asyncProcessing}
    >
      {!asyncProcessing ? text : <Procesing/>}
    </button>
  )
}
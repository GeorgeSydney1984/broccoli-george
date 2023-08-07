export function Footer() {
  return (    
    <footer className="bg-white w-full h-[var(--footer-height)] absolute bottom-0 border-t-2 border-slate-50">
      <div className="w-full flex flex-col items-center p-4">
        <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400 mb-1 italic">Made with ❤️ in Melboune</span>
        <span className="text-xs text-gray-500 sm:text-center dark:text-gray-500 sm:text-sm">© 2023 Brocconi & Co. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
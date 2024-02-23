export default function Button({ children, ...props }) {
    return (
    <button className="px-4 py-2 text-xs rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-stone-100" {...props} >
        {children}
    </button>
)}
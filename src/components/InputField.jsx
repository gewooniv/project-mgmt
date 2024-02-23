export default function InputField({ label, textarea, input, ...props }) {
    const classes = "w-full border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    
    return (
        <p className="flex flex-col gap-1 my-4">
        <label className="text-sm text-stone-500 uppercase">{label}</label>
        {textarea ? 
            <textarea className={classes} {...props}/> : 
            <input className={classes} ref={input} {...props} />
        }
    </p>
    )
}
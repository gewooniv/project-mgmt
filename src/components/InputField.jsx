export default function InputField({ label, input, ...props }) {
    return (
        <>
        <label>{label}</label>
        <input ref={input} type="text" {...props} />
        </>
    )
}
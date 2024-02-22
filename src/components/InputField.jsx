export default function InputField({ label, ...props }) {
    return (
        <>
        <label>{label}</label>
        <input type="text" {...props} />
        </>
    )
}
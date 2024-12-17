export default function LabelDescreption({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <div {...props} className={`text-muted-foreground text-sm ` + className}>
            {value ? value : children}
        </div>
    );
}


function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>mutlti layout</div>
            {children}
        </>
    )
}

export default layout
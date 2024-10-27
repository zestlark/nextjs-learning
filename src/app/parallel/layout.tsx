export default function RootLayout({
    children,
    aside, main
}: Readonly<{
    children: React.ReactNode;
    aside: React.ReactNode;
    main: React.ReactNode;

}>) {
    return (
        <div>
            {children}

            <div className="flex">
                {aside}
                {main}
            </div>
        </div>
    );
}

interface NavbarProps {
    items: number[];
}

function Navbar({ items }: NavbarProps) {
    return (
        <div>
            <nav>
                <ul className="flex justify-end gap-3 rounded-lg bg-[#ec11aa52] p-1 text-4xl font-bold">
                    {items.map((item) => {
                        return <li key={item}>{item}</li>;
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

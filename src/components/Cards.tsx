import { useEffect, useState } from "react"

type Book = { id: number; name: string }
type Props = { title: string; description: string }

function Cards({ title, description }: Props) {
    const [data, setData] = useState<Book[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://simple-books-api.glitch.me/books")
            const json = await resp.json()
            console.log("json:", json)
            setData(json)
        }
        fetchData()
    }, [])

    return (
        <div className="bg-[#a62dbe2a] m-2 rounded-bl-md">
            <h1 className="text-4xl">{title}</h1>
            <p className="text-3xl">{description}</p>
            <ul className="text-2xl">
                {data.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cards

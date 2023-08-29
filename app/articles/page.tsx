'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"

export default function Page() {

    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')


    interface iArticles {
        id: number | null,
        title: string,
        content: string
    }
    const [article, setArticle] = useState<iArticles[]>([])

    const handleClick = (event: any) => {
        event.preventDefault()

        const newArticle = { id: new Date().getTime(), title: title, content: content }

        setArticle(prevArticles => [...prevArticles, newArticle])

        console.log(newArticle);
    }

    return (
        <>
            <div className="flex p-8 justify-center">
                {article.map((item) => {
                    return <div key={item.id} className="m-5">
                        <Card>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{item.content}</p>
                            </CardContent>
                        </Card>
                    </div>
                })}
            </div>
            <div className="w-[400px] mx-auto flex justify-center flex-col">
                <form onSubmit={handleClick}>
                    <Input type="text" placeholder="title" onChange={e => setTitle(e.target.value)} />
                    <Input type="text" placeholder="content" onChange={e => setContent(e.target.value)} />
                    <Button>Envoyer</Button>
                </form>
            </div>
        </>
    )
}
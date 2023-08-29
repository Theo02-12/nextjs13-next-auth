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
    const [file, setFile] = useState<File>()


    interface iArticles {
        id: number | null,
        title: string,
        content: string
    }
    const [article, setArticle] = useState<iArticles[]>([])

    const handleClick = async (event: any) => {
        event.preventDefault()

        if(!file) return

        try{
            const data = new FormData()
            data.set('file', file)

            const res = await fetch('api/upload', {
                method: 'POST',
                body: data
            })

            if(!res.ok) throw new Error(await res.text())
        }catch(e: any){
            console.error(e)
        }


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
                    <Input  type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])}/>
                    <Button>Envoyer</Button>
                </form>
            </div>
        </>
    )
}
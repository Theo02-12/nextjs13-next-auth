import { NextRequest, NextResponse } from "next/server.js"
import bcrypt from 'bcrypt';
export async function POST(request: NextRequest) {

    const data = await request.formData()
    const username : string | null = data.get('username') as unknown as string
    const password : string | null = data.get('password') as unknown as string

    const hashedpassword = await bcrypt.hash(password, 12)

    if(!username || !password){
        return NextResponse.json({ success: 'false'})
    }
    return NextResponse.json({ 
        username: username,
        password: hashedpassword
        })
}
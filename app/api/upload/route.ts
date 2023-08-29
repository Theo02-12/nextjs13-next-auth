import { writeFile, promises as fsPromises } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest){
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
        return NextResponse.json({ success: false });
    }

    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const path = join('/', 'tmp', file.name);

        await fsPromises.writeFile(path, buffer);
        console.log(`File written to ${path}`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error writing file:", error);
        return NextResponse.json({ success: false, error: "File writing failed" });
    }
}

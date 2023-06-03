import { NextResponse } from "next/server"

export async function POST(req, res) {
    console.log("Voici la requête :")
    NextResponse.json({ name: 'John Doe' })
}
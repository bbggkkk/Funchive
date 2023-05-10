import { NextResponse } from 'next/server';
import open from 'open';

export async function GET(request: Request) {

    return NextResponse.json({ result: true })
}

import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { resolve } from 'path';

export async function GET(request: Request) {
    const {stdout, ...python} = spawn('python', [resolve('src/test.py')]);
    const data = await new Promise((res, rej) => {
        let result = '';
        stdout.on('data', (data) => {
            result = data.toString().trim();
        });
        stdout.on('close', () => {
            res(result);
        });
        stdout.on('error', (err) => {
            rej(err);
        });
    }).catch((err) => {
        console.error(err);
        return false
    }); 
    return NextResponse.json({ data });
}

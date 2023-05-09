import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { resolve } from 'path';


export async function GET(request: Request) {
    console.log(global.test)
    return NextResponse.json({ result: 'hi' })
}

// type HandlerType = {
//     [key in string]: (argument: string, res: (value: unknown) => void) => any
// }
// const handler: HandlerType = {
//     echo(argument = '', res) {
//         res({ result: argument });
//         return argument;
//     },
//     getData(argument = '', res) {
//         return argument;
//     }
// };

// export async function GET(request: Request) {
//     const { stdout } = spawn('python', [resolve('src/test.py'), 'hi', 'me']);
//     const result = await new Promise((res, rej) => {
//         let recentData = '';
//         stdout.on('data', (data) => {
//             const result = data.toString().trim();
//             const [prefix, command, ...argument] = result.split(' ') as Array<
//                 string | undefined
//             >;
//             if (prefix === '$$' && command !== undefined && command in handler) {
//                 handler[command](argument?.join(' '), res);
//             } else {
//                 rej('명령 오류');
//             }
//         });
//         stdout.on('error', (err) => {
//             rej('명령 오류');
//         });
//     }).catch((err) => {
//         return createErrorMessage(err);
//     });
//     return NextResponse.json(result);
// }

// function createErrorMessage(err: string) {
//     return {
//         isError: true,
//         result: err
//     }
// }
import { spawn } from 'child_process';
const test_py = spawn('python', ['src/test.py', 'argv1']);

let dataToSend = '';
test_py.stdout.on('data', (data) => {
    dataToSend = data.toString();
});
test_py.stdout.on('close', (code) => {
    console.log(dataToSend);
});

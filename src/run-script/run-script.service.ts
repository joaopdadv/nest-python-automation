import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

@Injectable()
export class RunScriptService {
    runPythonScript(scriptPath: string, args: string[]): Promise<string> {
        return new Promise((resolve, reject) => {
            const expectedArgumentCount = 1; // Clearly define expected number

            if (args.length !== expectedArgumentCount) {
                reject(new Error(`Expected ${expectedArgumentCount} arguments, but received ${args.length}.`));
                return; // Exit early to prevent unnecessary execution
            }

            PythonShell.run(scriptPath, { args, pythonOptions: ['-u'] }) // Use '-u' for unbuffered output
                .then((results) => {
                    // Concatenate the output from all lines of stdout
                    const output = results.join('\n');
                    console.log(results);
                    resolve(output);
                })
                .catch((e) => {
                    reject(e);
                });
        });
    }

    moveAndClick(name: string): Promise<string> {
        const scriptPath = './bot_test.py';
        const args = [name];
        return this.runPythonScript(scriptPath, args);
    }
}

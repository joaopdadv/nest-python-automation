import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

@Injectable()
export class RunScriptService {
    runPythonScript(scriptPath: string, args: string[]): Promise<string> {
        return new Promise((resolve, reject) => {
            const expectedArgumentCount = 5; // Clearly define expected number

            if (args.length !== expectedArgumentCount) {
                reject(new Error(`Expected ${expectedArgumentCount} arguments, but received ${args.length}.`));
                return; // Exit early to prevent unnecessary execution
            }

            PythonShell.run(scriptPath, { args }).then(
                () => {
                    resolve('Success');
                }
            ).catch(
                (e) => {
                    reject(e);
                }
            );
        });
    }

    moveAndClick(startX: number, startY: number, endX: number, endY: number, duration: number): Promise<string> {
        const scriptPath = './bot_test.py';
        const args = [startX.toString(), startY.toString(), endX.toString(), endY.toString(), duration.toString()];
        return this.runPythonScript(scriptPath, args);
    }
}

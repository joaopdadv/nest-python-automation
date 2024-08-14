import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import { PrismaService } from 'src/prisma/prisma.service';
import { SocketGateway } from 'src/socket/socket.gateway';

@Injectable()
export class RunScriptService {


    constructor(
        private readonly prisma: PrismaService,
        private readonly socketGateway: SocketGateway,
    ) { }

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

    async moveAndClick(name: string): Promise<string> {
        const scriptPath = './bot_test.py';
        const args = [name];

        await this.prisma.keys.create({
            data: {
                name: name,
            }
        })
            .then((result) => {
                console.log(`Saved name to database: ${result.name}`);
                this.socketGateway.sendNewName(result.name);
                return this.runPythonScript(scriptPath, args);
            })
            .catch((e) => {
                throw new Error(`Failed to save name to database: ${e.message}`);
            });

        return null;
    }
}

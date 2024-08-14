import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  // SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  async handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  afterInit() {
    console.log('Socket server initialized');
  }

  // @SubscribeMessage('names')
  // handleMessage(client: any, payload: any): string {
  //   return 'Hello world!';
  // }

  sendNewName(name: string) {
    this.server.emit('names', name);
  }
}

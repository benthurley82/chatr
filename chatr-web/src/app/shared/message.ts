export class Message {

  public received: Date;

  constructor(public sender: string, public message: string) {
    this.received = new Date();
  }

}

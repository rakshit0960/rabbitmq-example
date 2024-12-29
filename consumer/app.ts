import amqp from "amqplib";

async function connect() {
  const connection = await amqp.connect("amqp://localhost:5672");
  console.log("Connected to RabbitMQ");
  const channel = await connection.createChannel();
  console.log("Channel created");
  const result = await channel.assertQueue("Jobs");
  console.log(result);
  console.log("Waiting for messages...");

  channel.consume("Jobs", (message) => {
    if (message) {
      console.log(JSON.parse(message.content.toString()));
      channel.ack(message);
    }
  });
}

connect();

import amqp from "amqplib";

async function connect(message: string) {
  try {
    const connection = await amqp.connect("amqp://localhost:5672"); // open tcp connection to rabbitmq
    console.log("Connected to RabbitMQ");

    const channel = await connection.createChannel(); // create channel
    console.log("Channel created");

    const result = await channel.assertQueue("Jobs");
    console.log(result);

    channel.sendToQueue(
      "Jobs",
      Buffer.from(
        JSON.stringify({
          message,
        })
      )
    );
    console.log("Message sent to queue message: ", message);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error(error);
  }
}
connect(process.argv[2]);

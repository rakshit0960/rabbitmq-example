# RabbitMQ Publisher-Consumer Example

This project demonstrates a simple RabbitMQ setup with a publisher and a consumer using Node.js and TypeScript.

## Project Structure

- **publisher**: Contains the publisher code that sends messages to a RabbitMQ queue.
- **consumer**: Contains the consumer code that receives messages from the RabbitMQ queue.

## Prerequisites

- Node.js and npm installed
- RabbitMQ server running locally or accessible remotely

## Running RabbitMQ Server in Docker

You can run a RabbitMQ server in a Docker container using the following command:

```bash
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

This command will start a RabbitMQ server accessible on port 5672.

## Setup

1. **Install Dependencies**

   Navigate to both `publisher` and `consumer` directories and run:

   ```bash
   npm install
   ```

2. **Run Producer**

   To send a message to the queue, run the following command from the root directory:

   ```bash
   npm run producer "Your message here"
   ```

3. **Run Consumer**

   To receive messages from the queue, run the following command from the root directory:

   ```bash
   npm run consumer
   ```

## License

This project is licensed under the MIT License.

import { kafkaClient } from "../clients/kafkaClients";

const consumer = kafkaClient.consumer({ groupId: "example-group" });

export const runConsumer = async (topicName: string) => {
  try {
    await consumer.connect();
    console.log(`Connected to Kafka broker - 📬`);

    await consumer.subscribe({ topic: topicName, fromBeginning: true });
    console.log(`Subscribed to topic ${topicName} - ✅`);

    console.log(`Consumer is running. Press Ctrl+C to exit - 📡`);
    process.on("SIGINT", async () => {
      console.log("\nShutting down consumer...");
      await consumer.disconnect();
      console.log("Consumer disconnected - 📭");
      process.exit(0);
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message from topic ${topic} [Partition: ${partition}] - 📥`);
        console.log(`Key: ${message.key?.toString()}`);
        console.log(`Value: ${message.value?.toString()}`);
        console.log(`Offset: ${message.offset}`);
        console.log(`Timestamp: ${message.timestamp}`);
      },
    });
  } catch (error) {
    console.error(`Error in consumer: ${error} - ❌`);
  } finally {
    // await consumer.disconnect();
  }
};

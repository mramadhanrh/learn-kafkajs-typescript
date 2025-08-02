import { kafkaClient } from "../clients/kafkaClients";

const producer = kafkaClient.producer();

export const runProducer = async (topicName: string) => {
  try {
    await producer.connect();
    console.log(`Connected to Kafka broker - 📬`);

    await producer.send({
      topic: topicName,
      messages: [
        { value: `Message 1 sent to topic ${topicName} - ✅` },
        { value: `Message 2 sent to topic ${topicName} - ✅` },
        { value: `Message 3 sent to topic ${topicName} - ✅` },
      ],
    });

    console.log(`Message sent to topic ${topicName} successfully - 📤`);
  } catch (error) {
    console.error(`Error in producer: ${error} - ❌`);
  } finally {
    await producer.disconnect();
    console.log(`Disconnected from Kafka broker - 📭`);
  }
};

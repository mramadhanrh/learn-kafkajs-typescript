import { createTopic } from "./src/kafka/createTopic";
import { runConsumer } from "./src/kafka/runConsumer";
import { runProducer } from "./src/kafka/runProducer";

const runKafkaExample = async () => {
  try {
    const topicName = "example-topic";

    console.log(`Creating topic: ${topicName} - 📦`);
    await createTopic(topicName);

    console.log(`Starting producer for topic: ${topicName} - 📡`);
    await runProducer(topicName);

    console.log(`Starting consumer for topic: ${topicName} - 📡`);
    await runConsumer(topicName);
  } catch (error) {
    console.error(`Error in Kafka example: ${error} - ❌`);
  }
};

runKafkaExample();

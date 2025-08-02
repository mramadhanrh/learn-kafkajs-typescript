import type { ITopicConfig } from "kafkajs";
import { kafkaClient } from "../clients/kafkaClients";

const admin = kafkaClient.admin();

export const createTopic = async (topicName: string) => {
  await admin.connect();
  console.log(`Connected to Kafka broker - 📬`);

  const topics: ITopicConfig[] = [
    {
      topic: topicName,
      numPartitions: 1,
      replicationFactor: 1,
    },
  ];

  await admin.createTopics({ topics });
  console.log(`Topic ${topicName} created successfully - ✅`);

  await admin.disconnect();
  console.log(`Disconnected from Kafka broker - 📭`);
};

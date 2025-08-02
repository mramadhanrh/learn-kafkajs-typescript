# Up Docker Compose
docker compose up -d

# Create Kafka Topics
echo "Creating Kafka topic: example-topic"
docker exec -it kafka /usr/bin/kafka-topics --create --topic example-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

# Logs Kafka Topics
echo "Checking Kafka topics"
docker exec -it kafka /usr/bin/kafka-topics --list --bootstrap-server localhost:9092

# Produce Messages to Kafka
echo "Producing messages to example-topic"
echo "Test message 1" | docker exec -i kafka /usr/bin/kafka-console-producer --topic example-topic --bootstrap-server localhost:9092
echo "Test message 2" | docker exec -i kafka /usr/bin/kafka-console-producer --topic example-topic --bootstrap-server localhost:9092
echo "Test message 3" | docker exec -i kafka /usr/bin/kafka-console-producer --topic example-topic --bootstrap-server localhost:9092

# Wait for a few seconds to ensure messages are produced
echo "Delaying for consuming messages..."
sleep 2

# Consume Kafka Topics
echo "Consuming messages from example-topic"
docker exec -it kafka /usr/bin/kafka-console-consumer --topic example-topic --bootstrap-server localhost:9092 --from-beginning

echo "Kafka topic consumption complete."
docker compose down
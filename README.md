# Learn KafkaJS with TypeScript

A simple project to learn Apache Kafka using KafkaJS library with TypeScript and Bun runtime.

## 🚀 Quick Start

```bash
bun run dev
```

This single command will:
- Stop any existing Docker containers
- Start Kafka and Zookeeper containers
- Run the application with hot reload

## 📋 Prerequisites

- [Bun](https://bun.sh/) runtime
- [Docker](https://www.docker.com/) and Docker Compose
- Node.js (for development dependencies)

## 🛠️ Project Structure

```
├── src/
│   ├── clients/
│   │   └── kafkaClients.ts    # Kafka client configuration
│   ├── kafka/
│   │   ├── createTopic.ts     # Topic creation utilities
│   │   ├── runConsumer.ts     # Consumer implementation
│   │   └── runProducer.ts     # Producer implementation
│   └── kafka.ts               # Main Kafka exports
├── docker-compose.yml         # Kafka & Zookeeper setup
├── index.ts                   # Application entry point
└── package.json
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | 🔄 Development mode with hot reload and Docker setup |
| `bun run start` | ▶️ Start the application |
| `bun run build` | 🏗️ Build TypeScript to JavaScript |
| `bun run docker:up` | 🐳 Start Kafka containers |
| `bun run docker:down` | 🛑 Stop Kafka containers |
| `bun run docker:logs` | 📋 View container logs |

## 🎯 Features

- **Producer**: Send messages to Kafka topics
- **Consumer**: Consume messages from Kafka topics with group management
- **Admin**: Create and manage Kafka topics
- **Docker Integration**: Automated Kafka and Zookeeper setup
- **TypeScript**: Full type safety
- **Hot Reload**: Development with automatic restarts

## 🔧 Configuration

### Kafka Broker
- **External Port**: `29092` (for client connections)
- **Internal Port**: `9092` (for inter-broker communication)

### Zookeeper
- **Port**: `2181`

### Consumer Groups
- **Default Group**: `example-group`

## 📖 Usage Examples

### Creating a Topic
```typescript
import { createTopic } from './src/kafka/createTopic';

await createTopic('my-topic');
```

### Producing Messages
```typescript
import { runProducer } from './src/kafka/runProducer';

await runProducer('my-topic', 'Hello, Kafka!');
```

### Consuming Messages
```typescript
import { runConsumer } from './src/kafka/runConsumer';

await runConsumer('my-topic');
```

## 🐛 Troubleshooting

### Consumer Not Receiving Messages
1. Ensure the topic exists
2. Check if messages are being produced
3. Verify consumer group configuration
4. Use correct bootstrap server: `localhost:29092`

### Replication Factor Errors
If you see `InvalidReplicationFactorException`, ensure your `docker-compose.yml` has:
```yaml
KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1
```

### Docker Issues
```bash
# Reset everything
bun run docker:down
docker system prune -f
bun run docker:up
```

## 📚 Learning Resources

- [KafkaJS Documentation](https://kafka.js.org/)
- [Apache Kafka Documentation](https://kafka.apache.org/documentation/)
- [Confluent Kafka Guide](https://docs.confluent.io/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `bun run dev`
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🧑‍💻 Sample Running Output

https://app.warp.dev/block/BvCaiqxR1OO7jL0JkqehS9
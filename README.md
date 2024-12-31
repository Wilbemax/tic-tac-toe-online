# Tic-Tac-Toe Online

## Project Description
Tic-Tac-Toe Online is a multiplayer online game that brings the classic Tic-Tac-Toe to life using modern technologies. The goal is to provide users with a seamless real-time gaming experience.

## Tech Stack
- **Next.js 15**: for server-side rendering and routing.
- **React 19**: for building an interactive user interface.
- **RabbitMQ**: for real-time message exchange between players.
- **ShadCN/UI**: for styling and UI components.

## Features
- Real-time multiplayer gameplay.
- Intuitive and user-friendly interface.
- Room creation and joining functionality.
- Real-time game state updates.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/tic-tac-toe-online.git
   cd tic-tac-toe-online
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start RabbitMQ:**
   Ensure RabbitMQ is running locally or accessible on a remote server.

4. **Start the application:**
   ```bash
   docker-compose up
   npm run dev
   ```

5. **Open the app in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure
- `/components` — reusable React components.
- `/pages` — application pages managed by Next.js.
- `/styles` — styles used in the application (ShadCN).
- `/utils` — utility functions and helpers.

## How to Play
1. Log in to the application.
2. Create a room or join an existing one.
3. Players take turns making moves, aiming to align three symbols in a row.
4. The player who aligns three symbols first wins.

## Future Enhancements
- Adding a single-player mode with AI.
- Improving visualization of winning lines.
- Supporting custom interface themes.

## Contributing
PRs and suggestions are welcome! Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for more information.

## License
This project is licensed under the terms of the [MIT License](./LICENSE).

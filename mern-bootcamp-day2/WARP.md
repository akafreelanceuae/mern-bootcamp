# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a MERN Bootcamp Day 2 project - a simple Express.js server with MongoDB integration using Mongoose. It's a learning exercise demonstrating basic MERN stack setup with proper error handling and environment configuration.

## Common Development Commands

### Server Operations
```bash
# Start the development server
node server.js

# Install dependencies
npm install
```

### MongoDB Setup
```bash
# Start MongoDB locally (required for the server to connect)
# Using Homebrew on macOS:
brew services start mongodb-community

# Or using mongod directly:
mongod --dbpath /usr/local/var/mongodb

# Stop MongoDB service
brew services stop mongodb-community
```

### Environment Setup
```bash
# Copy environment variables (if .env.example exists)
cp .env.example .env

# The server expects these environment variables:
# MONGODB_URI (defaults to mongodb://localhost:27017/mern-bootcamp)
# NODE_ENV (defaults to development)
```

## Architecture

### Server Structure (server.js)
- **Express Setup**: Basic Express server with CORS and JSON middleware
- **MongoDB Connection**: Async connection with proper error handling and event listeners
- **Environment Configuration**: Uses dotenv for configuration management
- **Error Handling**: Global error middleware with development/production stack trace handling
- **Graceful Shutdown**: SIGINT handler for clean server and database disconnection

### Key Components
- **Database**: MongoDB with Mongoose ODM
- **API Endpoints**: Currently has `/api/welcome` route returning environment info
- **Connection Management**: Robust MongoDB connection with timeout configurations and event handlers

### Configuration
- **MongoDB URI**: Configurable via `MONGODB_URI` environment variable
- **Port**: Configurable via `PORT` environment variable (defaults to 3000)
- **Timeouts**: Server selection timeout of 5s, socket timeout of 45s

## Development Notes

### MongoDB Connection Requirements
The server requires a running MongoDB instance. Common connection issues:
- Ensure MongoDB service is running locally on port 27017
- Check that `MONGODB_URI` in `.env` matches your MongoDB setup
- The server uses IPv4 family connection (`family: 4`) for compatibility

### Error Handling Pattern
The server includes comprehensive error handling:
- Database connection errors cause process exit
- Global error middleware catches unhandled errors
- Development mode includes full stack traces
- Connection events are logged for debugging

### Server Lifecycle
1. Server starts and begins listening on specified port
2. Database connection is attempted after server start
3. Connection events are monitored throughout runtime
4. Graceful shutdown handles both server and database cleanup

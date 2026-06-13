# NewsOne

NewsOne is a modern news aggregation platform that collects verified news from multiple RSS feeds using n8n and displays them through a React-based web interface.

## Features

* Real-time RSS news aggregation
* Duplicate news filtering
* Search functionality
* Responsive UI
* n8n-powered automation
* Direct API integration
* News from multiple trusted sources

## Tech Stack

### Frontend

* React.js
* Vite
* CSS3

### Automation

* n8n

### Data Sources

* BBC RSS
* TechCrunch RSS
* Hacker News RSS

## Project Architecture

RSS Feeds → n8n Workflow → Webhook API → React Frontend

## Installation

### Clone Repository

git clone https://github.com/Ameycode/newsone.git

### Install Dependencies

npm install

### Start Frontend

npm run dev

### Start n8n

n8n start

## API Endpoint

http://localhost:5678/webhook/newsone

## Future Enhancements

* AI-powered news summaries
* Category filtering
* Dark mode
* Trending news section
* User authentication
* Bookmarking articles

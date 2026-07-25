# 🤖 AI Research Assistant

An AI-powered Research Assistant built with **Spring Boot**, **React (Vite)**, **Tailwind CSS**, and **Google Gemini AI**. It helps users quickly summarize research articles and get AI-generated topic suggestions.

## 🚀 Features

- AI-powered text summarization
- Related topic suggestions
- Clean and responsive UI
- Spring Boot REST API
- Gemini AI integration

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Axios

**Backend**
- Java 17
- Spring Boot
- Spring Web & WebFlux
- Maven

**AI**
- Google Gemini API

##  Project Structure

```
research-assistant/
├── backend/
└── frontend/
```

## ▶️ Run Locally

### Backend

```bash
./mvnw spring-boot:run
```

### Frontend

```bash
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`

## 📡 API

**POST** `/api/research/process`

```json
{
  "content": "Artificial Intelligence is changing the world.",
  "operation": "summarize"
}
```

## 🚀 Deployment

- **Frontend:** Vercel
- **Backend:** Render

## 🔮 Future Improvements

- PDF summarization
- Website URL summarization
- Export summaries
- Authentication
- Dark mode

## 👩‍💻 Author

**Sangeeta Mishra**

GitHub: https://github.com/sangeeta2003


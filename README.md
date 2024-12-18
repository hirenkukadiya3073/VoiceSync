# VoiceSync

VoiceSync is a web application that enables users to record or upload audio files, transcribe them into text using Hugging Face's `openai/whisper-tiny.en` model, and translate the transcriptions into multiple languages via the Google Translate API. Users can download transcriptions and translations as PDFs for enhanced convenience.

## Features

- **Audio Upload/Recording**
  - Upload pre-recorded audio files.
  - Record audio directly within the application.

- **Transcription**
  - Convert audio to text using the Hugging Face `openai/whisper-tiny.en` model.

- **Translation**
  - Translate transcriptions into multiple languages using the Google Translate API.

- **Export Options**
  - Download transcriptions and translations as PDF files.

---

## Tech Stack

### Frontend
- **React.js**: For building an interactive user interface.
- **Tailwind CSS**: For responsive and modern styling.

### Backend
- **Node.js**: To handle server-side logic.
- **Express.js**: For routing and API handling.

### AI and APIs
- **Hugging Face Whisper Model (`openai/whisper-tiny.en`)**: To transcribe audio files.
- **Google Translate API**: For translating text into different languages.

### Additional Tools
- **PDF Generation**: To export transcriptions and translations.

---

## Installation

### Prerequisites

Before setting up the project, ensure the following are installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Hugging Face API Key**
- **Google Cloud Translate API Key**

---

### Steps to Set Up

1. **Clone the repository**
   ```bash
   git clone https://github.com/hirenkukadiya3073/VoiceSync.git
   cd VoiceSync

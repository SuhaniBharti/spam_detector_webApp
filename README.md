
#  Spam SMS Classifier - Frontend
 [live link - https://spamdetection-gamma.vercel.app ]

This is the **React.js** frontend for the Spam SMS Classifier project. It allows users to input a text message and receive a prediction from the backend FastAPI model on whether the message is spam or not.

---

## Project Structure

```
FRONTEND/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Layout.jsx
│   ├── pages/
│   │   ├── About Project/
│   │   │   ├── AboutProject.jsx
│   │   │   └── AboutSpam.jsx
│   │   ├── About Us/
│   │   │   └── AboutUs.jsx
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── ForgetPassword.jsx
│   │   ├── Home.jsx
│   │   ├── Error/
│   │   │   └── Error.jsx
│   │   ├── Model/
│   │   │   ├── Predict.jsx
│   │   │   └── Result.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── ScrollToTop.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

##  Getting Started

Follow the instructions below to set up and run the frontend locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/spam-sms-classifier.git
cd spam-sms-classifier/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

By default, it runs on: [http://localhost:5173](http://localhost:5173)

Ensure that your FastAPI backend is running at [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

## 🔗 API Integration

The frontend communicates with the following endpoint:

```
POST http://127.0.0.1:8000/predict
```

### Request Body:

```json
{
  "message": "Your SMS message here"
}
```

### Response:

```json
{
  "prediction": "spam" // or "ham"
}
```

---

## 🛠 Built With

- React.js (Vite)
- CSS
- FastAPI (Backend)
- Axios (HTTP Requests)

---


---

##  License
All Right Reserved @Data_Seekers team

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

# 📁 MERN Stack Practical Exam – Resume Submission Portal

This is a MERN stack application built during a 2-hour practical exam. It allows users to upload resumes in PDF format, view submissions, and optionally delete them. Files are handled using Multer and stored on Cloudinary.

---

## 🧩 Problem Statement

Build a MERN stack application where users can submit resumes (in PDF format) along with their basic information. The resumes should be uploaded using Multer and stored on Cloudinary, and all submissions should be displayed in a table format.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite) + Axios
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary

---

## 📦 Folder Structure

```
project-root/
├── client/                     # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   |── index.css
|   |   └── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Express Backend
│   ├── config/
│   │   └── cloudinary.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env.example
│   ├── app.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 📝 Tasks to Complete

- [ ] Set up Express server and connect to MongoDB
- [ ] Configure Multer and Cloudinary for resume uploads
- [ ] Create Resume schema in MongoDB
- [ ] Build REST API endpoints:
  - `POST /api/resumes`
  - `GET /api/resumes`
  - `DELETE /api/resumes/:id` (optional)
- [ ] Create a React form to submit resumes
- [ ] Display all resumes in a table
- [ ] Show link to view/download resume (from Cloudinary)
- [ ] Bonus: Add delete functionality for resume and Cloudinary file
- [ ] Exclude actual `.env` and use `.env.example`

---

## 🔧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Pavitra239/MERN-Internal-exam.git
   ```

2. **Install dependencies**

   - Backend:
     ```bash
     cd server
     npm install
     ```
   - Frontend:
     ```bash
     cd client
     npm install
     ```

3. **Configure environment**

   - Copy `.env.example` to `.env` inside `/server` and fill in your credentials

4. **Run the application**
   - Backend:
     ```bash
     cd server
     npm run dev
     ```
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```

---

## 📎 Deployment (Optional)

If deployed, include the app URL here:  
🔗 [Live App](https://your-deployment-link.com)

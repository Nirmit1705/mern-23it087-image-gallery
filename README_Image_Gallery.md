# 🖼️ MERN Stack Internal Practical Exam – Image Gallery with Tags

This is a MERN stack application built during a 2-hour practical exam. It allows users to upload images with titles and tags, view them in a gallery layout, and filter by tags. Images are uploaded using Multer and hosted on Cloudinary.

---

## 🧩 Problem Statement

Create a simple image gallery application using the MERN stack. Users can upload images with a title and tags. The app displays all images in a gallery and allows filtering by tag. Uploaded images are stored on Cloudinary.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite) + Axios
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **File Upload**: Multer
- **Image Hosting**: Cloudinary

---

## 📦 Folder Structure

```
project-root/
├── client/                     # React Frontend
│   ├── public
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   |── index.css
        └── index.html
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
- [ ] Configure Multer and Cloudinary for image uploads
- [ ] Create Image schema in MongoDB
- [ ] Build REST API endpoints:
  - `POST /api/images`
  - `GET /api/images`
  - `GET /api/images?tag=yourTag`
  - `DELETE /api/images/:id` (optional)
- [ ] Create a React form to upload images with tags
- [ ] Display all images in a grid view with title + tags
- [ ] Implement tag filtering (frontend or backend)
- [ ] Bonus: Add delete functionality
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

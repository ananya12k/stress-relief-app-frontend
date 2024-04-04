# Stress Relief & Habit Builder App

Welcome to our Stress Relief & Habit Builder App! In today's fast-paced world, managing stress and cultivating healthy habits are essential for overall well-being. Our app aims to empower users to take control of their mental and physical health by offering a comprehensive set of features designed to reduce stress and foster positive habits.

## Introduction

Life can often be overwhelming, with various stressors affecting our mental and physical health. So, the app provides a holistic solution to combat stress and improve overall well-being. Whether you're looking to incorporate mindfulness practices into your daily routine or cultivate healthy habits for long-term wellness, our app is designed to support you every step of the way.

## Features

### 1. Yoga and Exercise Routines
Access a diverse library of yoga and exercise routines suitable for all skill levels. Follow along with video demonstrations and track your progress to stay motivated and achieve your fitness goals.

### 2. Breathing Exercises
Practice guided breathing exercises to relax your mind and body. Our app offers a variety of breathing techniques with visual cues to help you manage stress effectively.

### 3. Daily Reflections and Journaling
Promote self-awareness and emotional well-being by jotting down your thoughts, feelings, and reflections. Develop a daily journaling habit to gain insights into your mental state and track your personal growth journey.

### 4. Gratitude Journal
Cultivate a positive mindset by expressing gratitude daily. Use our app to list things you're thankful for, fostering a sense of appreciation and contentment in your life.

## Tech Stack

 Web app is built using microservices architechture to deliver a seamless user experience:

- **Backend**: Developed using Spring Boot,Hibernate and PostgreSQL

- **Frontend**: Built with React
- 
- **Authentication**: Implemented using JSON Web Tokens (JWT) for secure authentication and authorization. 


# Dockerizeing a React App

1. Create a new React app using `npm init vite@latest stress-relief-app -- --template react`
2. `cd stress-relief-app`
3. `npm install`
4. `npm run dev`
5. Do changes in vite.config.js to add the following code:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://localhost:3000",
  },
  plugins: [react()],
});
```

6. `npm run dev`
7. `npm run build`
8. `npm run preview` or `npm install -g serve` and `serve -s dist`


[]: # Path: stress-relief-app/README.md

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

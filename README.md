# Notification System (Frontend Role)

##  Overview

This project implements a simple notification system with a frontend application, backend service, and logging middleware. The system allows users to create and view notifications while maintaining structured logging.

## Tech Stack

* Frontend: Next.js / React, Material UI
* Backend: Node.js, Express
* Logging: Custom logging middleware with API integration

##  Project Structure

* logging_middleware/ → reusable logging function
* notification_app_fe/ → frontend application
* notification_app_be/ → backend service
* notification_system_design.md → system design explanation

##  Running the Project

### Frontend

```bash
cd notification_app_fe
npm install
npm run dev
```

### Backend

```bash
cd notification_app_be
npm install
node index.js
```

## 📸 Screenshots

<img width="1836" height="1030" alt="image" src="https://github.com/user-attachments/assets/f1436534-103e-4dc6-ae42-d894efa4aac9" />
<img width="1919" height="978" alt="image" src="https://github.com/user-attachments/assets/0e9dc0d0-db7f-41c2-83ba-035edc966353" />
<img width="1916" height="924" alt="image" src="https://github.com/user-attachments/assets/eba1b65e-d999-4673-a0fa-4b64886a2510" />



##  Notes

* Logging API is integrated using authentication tokens
* All logs follow the required structured format

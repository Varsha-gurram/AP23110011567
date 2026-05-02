"use client";

import { useEffect, useState } from "react";
import {
  getNotifications,
  addNotification,
  markAsRead,
} from "../services/notificationService";
import { Log } from "../logging_middleware/logger";
import styles from "./page.module.css";

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

export default function Home() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch notifications
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch {
      Log("frontend", "error", "component", "Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Add notification
  const handleAdd = async () => {
    if (!message.trim()) return;

    try {
      Log("frontend", "info", "component", "User clicked add notification");

      await addNotification(message);
      setMessage("");
      fetchData();
    } catch {
      Log("frontend", "error", "component", "Add notification failed");
    }
  };

  // 🔹 Mark as read
  const handleMarkRead = async (id: number) => {
    try {
      await markAsRead(id);
      fetchData();
    } catch {
      Log("frontend", "error", "component", "Mark as read failed");
    }
  };

  // 🔹 Initial load
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Notifications</h2>

        {/* Input */}
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message..."
          />

          <button className={styles.button} onClick={handleAdd}>
            Add
          </button>
        </div>

        {/* Notifications List */}
        <div>
          {loading ? (
            <p className={styles.empty}>Loading...</p>
          ) : notifications.length === 0 ? (
            <p className={styles.empty}>No notifications</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`${styles.notification} ${
                  n.read ? styles.read : styles.unread
                }`}
                onClick={() => handleMarkRead(n.id)}
              >
                {n.message}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
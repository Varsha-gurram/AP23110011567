import axios from "axios";
import { Log } from "../logging_middleware/logger";

const BASE_URL = "http://127.0.0.1:5000";

export const getNotifications = async () => {
  try {
    Log("frontend", "info", "api", "Fetching notifications");
    const res = await axios.get(`${BASE_URL}/notifications`);
    return res.data;
  } catch (error) {
    Log("frontend", "error", "api", "Failed to fetch notifications");
    throw error;
  }
};

export const addNotification = async (message: string) => {
  try {
    Log("frontend", "info", "api", "Creating notification");
    const res = await axios.post(`${BASE_URL}/notifications`, { message });
    return res.data;
  } catch (error) {
    Log("frontend", "error", "api", "Failed to create notification");
    throw error;
  }
};
export const markAsRead = async (id: number) => {
  await fetch(`http://localhost:5000/notifications/${id}`, {
    method: "PUT",
  });
};
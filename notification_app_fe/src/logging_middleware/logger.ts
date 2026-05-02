import axios from "axios";

export const Log = async (
  stack: string,
  level: string,
  pkg: string,
  message: string
) => {
  try {
    await axios.post("http://20.207.122.201/evaluation-service/logs", {
      stack,
      level,
      package: pkg,
      message,
    });
  } catch (error) {
    console.log("Logging failed (ignored):", message);
  }
};
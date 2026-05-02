export default function NotificationCard({ message }: { message: string }) {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        background: "#e6f0ff",
        marginBottom: "10px",
        fontSize: "14px",
      }}
    >
      {message}
    </div>
  );
}
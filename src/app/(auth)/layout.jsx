export default function AuthLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f4f6" }}>
      <main style={{ width: "100%", maxWidth: "420px", padding: "2rem", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        {children}
      </main>
    </div>
  );
}

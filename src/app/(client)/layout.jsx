export default function ClientLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem", backgroundColor: "#f9fafb" }}>
      <main style={{ maxWidth: "", margin: "0 auto", background: "#fff", borderRadius: "12px", padding: "2rem" }}>
        {children}
      </main>
    </div>
  );
}

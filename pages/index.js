function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <img
        src="https://i.imgur.com/g0AQIJX.png" // Coloca aqui a URL da foto real
        alt="Foto da nossa família"
        style={{
          maxWidth: "90%",
          height: "auto",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      />
      <h1 style={{ marginTop: "30px", color: "#333" }}>Bora virar dev!</h1>
    </div>
  );
}
export default Home;

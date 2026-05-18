function AboutMe() {
  return (
    <div
      id="about-me"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 120px",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <h1 style={{ color: "white" }}>สวัสดีครับ ผม Wisarut หรือ Java 👋</h1>
        <p>Computer Engineering Student | สนใจ AI, Web, Iot</p>
        <p>กำลังมองหาตำแหน่ง Internship ครับ</p>
      </div>
      <img
        src="/cat.jpg"
        alt="Profile Picture"
        style={{ width: "320px", height: "500px", objectFit: "cover" }}
      />
    </div>
  );
}

export default AboutMe;
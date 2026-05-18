function Hero() {
  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', padding: '60px 120px'}}>
    <div style={{ textAlign: 'left'}}>
      <h1>สวัสดีครับ ผม Wisarut หรือ Java 👋</h1>
      <p>Computer Engineering Student | สนใจ AI, Web, Iot</p>
      <p>กำลังมองหาตำแหน่ง Internship ครับ</p>
      </div>
      <div><img src="/mypic.jpg" alt="Profile Picture" style={{width: '320px', height: '500px', objectFit: 'cover'}} /></div>
    </div>
  )
}
export default Hero
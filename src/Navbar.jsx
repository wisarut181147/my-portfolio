function Navbar() {
  return (
    
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 42px', alignItems: 'center'}}>
        <div style={{fontSize: '30px'}}>JS.</div>
      <ul style={{display: 'flex', gap: '25px',listStyle: 'none'}}>
        <li>Home</li>
        <li>About me</li>
        <li>Work</li>
        <li>Certificate</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
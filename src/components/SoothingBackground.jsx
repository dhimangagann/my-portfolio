function SoothingBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Main ultra-smooth soothing gradient background */}
      <div className="absolute inset-0 soothing-bg"></div>
      
      {/* Enhanced floating particles for deeper ambient effect */}
      <div className="absolute inset-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Darker overlay for enhanced depth and text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Additional soft glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
    </div>
  )
}

export default SoothingBackground

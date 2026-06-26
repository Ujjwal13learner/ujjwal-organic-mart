export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f0fdf4' 
    }}>
      <h1 style={{ color: '#26b65b', fontSize: '3rem' }}>
        Welcome to Ujjwal Organic Mart 🌾
      </h1>
      <p style={{ color: '#495669', fontSize: '1.2rem' }}>
        Aapka apna full-stack organic marketplace. Shuruwaat ho chuki hai!
      </p>
    </div>
  );
}
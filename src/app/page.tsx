// pages/index.js or pages/index.tsx

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      <iframe
        src="https://my.spline.design/blockchain-wYrxCHn7N1TBVrF590KLMxT7/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        allowFullScreen
      />
    </div>
  );
}
const HeroBan = () => {
  return (
    <div
      className="p-5 text-center bg-image w-[100%]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1559595500-e15296bdbb48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Direct link to the image file with desired resolution
        height: 600,
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center", // Center the image within the container
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Peaceful Living</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBan;

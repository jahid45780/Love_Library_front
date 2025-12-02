const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <div className="flex flex-col items-center gap-4">
        
        {/* Circle loader */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />

        {/* Text */}
        <h1 className="text-white text-xl font-semibold animate-pulse tracking-wide">
          Loading, please wait...
        </h1>

        {/* Glow effect */}
        <div className="w-24 h-1 bg-blue-500/60 blur-lg rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingPage;

const TopIcon: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => {
    return (
      <div className="flex items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </div>
    );
  };
  export default TopIcon;
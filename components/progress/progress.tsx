const Progress = ({ value }: { value: number }) => {
  return (
    <div className="w-1/3 bg-gray-200 rounded-full h-2 mx-auto">
      <div
        className="bg-primary h-2 rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;

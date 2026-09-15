export const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-indigo-400 text-lg font-semibold">
        {subtitle}
      </h2>

      <h1 className="text-5xl font-bold text-white mt-2">
        {title}
      </h1>
    </div>
  );
};


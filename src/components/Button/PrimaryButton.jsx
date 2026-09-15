export const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
      {...props}
    >
      {children}
    </button>
  );
};

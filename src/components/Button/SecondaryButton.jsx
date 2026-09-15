export const SecondaryButton = ({ children, ...props }) => {
  return (
    <button
      className="px-6 py-3 rounded-xl border border-slate-600 hover:border-cyan-400 hover:bg-slate-800 text-white transition-all duration-300"
      {...props}
    >
      {children}
    </button>
  );
};


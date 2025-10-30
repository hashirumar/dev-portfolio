export function ColorButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-gradient-to-r from-primary to-[#8266F4] text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
    >
      {children}
    </button>
  );
}

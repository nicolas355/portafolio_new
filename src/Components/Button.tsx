interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-blue-300 text-black rounded-lg tracking-wide border-2 border-transparent uppercase transition-all hover:bg-blue-400  hover:scale-95 font-bold py-2 px-8">
      {children}
    </button>
  );
}

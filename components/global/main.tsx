interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main suppressHydrationWarning className="m-auto">
      {children}
    </main>
  );
};

export default Main;

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="m-auto">
      {children}
    </main>
  );
};

export default Main;

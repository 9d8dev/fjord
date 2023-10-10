interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="p-6 container m-auto max-w-screen-lg">{children}</main>;
};

export default Main;

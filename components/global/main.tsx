interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="p-6 container m-auto">{children}</main>;
};

export default Main;

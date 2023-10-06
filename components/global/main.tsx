interface MainProps {
  children: React.ReactNode;
}

const Footer: React.FC<MainProps> = ({ children }) => {
  return (
    <main className='p-6 max-w-screen-lg m-auto'>
      {children}
    </main>
  )
};

export default Footer;

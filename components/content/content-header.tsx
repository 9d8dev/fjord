type ContentHeaderProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  subtitle,
  children,
}) => (
  <header className="mb-12">
    <h1 className="text-4xl font-bold mb-2">{title}</h1>
    {subtitle && <p className="text-lg text-gray-600 mb-6">{subtitle}</p>}
    {children}
  </header>
);

export default ContentHeader;

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
  <header className="mt-12 flex flex-col gap-4 max-w-2xl">
    <h1 className="text-4xl">{title}</h1>
    {subtitle && <h2 className="text-lg text-gray-600">{subtitle}</h2>}
    {children}
  </header>
);

export default ContentHeader;

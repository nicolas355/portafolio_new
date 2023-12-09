interface Props {
  title: string;
}

const Badge: React.FC<Props> = ({ title }) => {
  return (
    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
      {title}
    </span>
  );
};

export default Badge;

import Reveal from './Reveal';

interface Props {
  title: string;
}
const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold whitespace-nowrap">{title}</h2>
      </div>
    </Reveal>
  );
};

export default SectionTitle;

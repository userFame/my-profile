type SectionHeaderProps = {
  title: string;
  description: string;
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="section-heading">
        {title}
      </h2>

      <p className="section-description">
        {description}
      </p>
    </div>
  );
}
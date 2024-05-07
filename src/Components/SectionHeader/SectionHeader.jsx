/* eslint-disable react/prop-types */

const SectionHeader = ({small, title, description}) => {
  return (
    <div className="max-w-2xl mx-auto text-center pb-8 md:pb-12 lg:pb-16 md:space-y-3">
    <h5 className="text-[var(--clr-accent)]">{small}</h5>
<h2>{title}</h2>
    <p>{description}</p>
  </div>
  );
};

export default SectionHeader;
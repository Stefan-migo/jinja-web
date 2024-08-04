const Section = ({ className, id, children }) => {
  return (
    <div
      id={id}
      className={`py-10 ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default Section;

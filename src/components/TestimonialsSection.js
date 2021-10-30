const TestimonialsSection = (props) => {
  const { content, author } = props;
  return (
    <div
      className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 lg:py-20 mt-10 mb-10 text-center"
      data-sb-field-path={annotationPrefix}>
      <div
        className="flex justify-center items-center"
        data-sb-field-path=".logos">
        <p>{content}</p>
        <p>-{author}</p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
import PropTypes from "prop-types";

const About = ({ about }) => {
  return (
    <section className="section about-section">
      <h1 className="section-title">{about}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ex
        obcaecati, nisi suscipit laudantium at ratione quia pariatur illum sunt
        fugit accusamus quidem accusantium quae vel corrupti deleniti eos
        facere!
      </p>
    </section>
  );
};

About.defaultProps = {
  about: "About Us",
};

About.propTypes = {
  about: PropTypes.string,
};

export default About;

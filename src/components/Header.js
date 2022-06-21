function Header(props) {
  const { title } = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: "title_placeholder",
};

Header.propTypes = {
  title: String,
};

export default Header;

function MyFooter() {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top">
        <p className="col-12 col-md-4 mb-0 text-muted">© 2023 Epibooks</p>
        <a
          href="/"
          className=" col-12 col-md-4 d-flex align-self-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src="/assets/images/logo-dark.png" alt="logo" width={100} />
        </a>
        <ul className="nav col-12 col-md-4 justify-content-center">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Browse
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default MyFooter;

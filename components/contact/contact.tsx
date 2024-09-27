const Contact = () => {
  return (
    <section className="py-10 py-lg-20 text-center bg-bg-3">
      <div className="container">
        <div className="d-flex flex-column justify-content-center">
          <h2 className="fw-bold display-6 mb-6">Επικοινωνήστε Μαζί Μας</h2>
          <p className="fs-2 mb-15">
            Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="fill-action-1 d-block mx-auto"
            >
              <path d="m16.71 13.081 5.13 2.199c.364.195.802.584.967.923.165.34.201.922.129 1.329l-1.064 4.03c-.128.369-.419.84-.707 1.056-.288.216-.844.362-1.234.381-4.866-.298-9.646-2.408-13.157-5.791C3.392 13.697 1.299 8.91 1 4.045c.02-.389.169-.921.384-1.208.216-.287.681-.576 1.048-.704l4.034-1.067c.407-.071.991-.035 1.33.13.34.166.728.604.923.968l2.2 5.129c.112.32.181.798.122 1.11-.06.313-.299.733-.519.99L8.97 10.968c.539.81.954 1.36 1.813 2.25.892.863 1.44 1.277 2.247 1.813l1.576-1.556c.259-.22.68-.46.994-.518.314-.059.79.011 1.11.124Zm3.242 7.916 1.032-3.908-5.014-2.149-2.101 2.072-.554.547-.664-.403a18.967 18.967 0 0 1-3.27-2.511 19.589 19.589 0 0 1-2.537-3.296l-.403-.664 2.618-2.656-2.15-5.011-3.906 1.033c.229 4.493 2.032 8.553 5.194 11.751 3.192 3.158 7.271 4.961 11.755 5.195Z"></path>
            </svg>
            <p className="h5 mb-4 mt-6">Καλέστε μας</p>
            <a href="tel:+306997833718" className="mb-0 fs-4 text-dark-1">
              +30 699 7833718
            </a>
          </div>
          <div className="col-md-4 mt-8 mb-8 mt-md-0 mb-md-0 ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="fill-action-1 d-block mx-auto"
            >
              <path d="m9.04.959 6 2L24 .719v20.062l-9.04 2.26-6-2L0 23.281V3.219ZM2 20.719l6-1.5V3.281l-6 1.5Zm20-1.5V3.281l-6 1.5v15.938ZM10 3.387v15.892l4 1.334V4.721Z"></path>
            </svg>
            <p className="h5 mb-4 mt-6">Επισκεφθείτε μας</p>
            <p className="mb-0 fs-4 text-dark-1">
              Ρουμπέση 68, Νέος Κόσμος, 11744
            </p>
          </div>
          <div className="col-md-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="fill-action-1 d-block mx-auto"
            >
              <path d="M12 11.649 20.413 4H3.587Zm0 2.702L2 5.26V19c-.044.348.057.471.293.707s.359.337.707.293h18c.348.044.471-.057.707-.293s.337-.359.293-.707V5.26ZM3 2h18c.757.044 1.634.391 2.121.879.488.487.835 1.364.879 2.121v14c-.044.757-.391 1.634-.879 2.121-.487.488-1.364.835-2.121.879H3c-.757-.044-1.634-.391-2.121-.879C.391 20.634.044 19.757 0 19V5c.044-.757.391-1.634.879-2.121C1.366 2.391 2.243 2.044 3 2Z"></path>
            </svg>
            <p className="h5 mb-4 mt-6">Στείλτε μας email</p>
            <a
              href="mailto:info@constructions-pjetri.gr"
              className="fs-4 text-dark-1"
            >
              info@constructions-pjetri.gr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

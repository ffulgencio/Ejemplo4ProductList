const FormSearch = ({
  onSubmit,
  categories,
  text,
  category,
  onChangeText,
  onChangeCategory,
}) => {
  return (
    <div className="card" style={{marginBottom:"10px"}}>
      {/* <div className="card-header"></div> */}
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={text}
                  onChange={onChangeText}
                />
              </div>
              <div className="col-md-3">
                <select
                  className="form-control"
                  value={category}
                  onChange={onChangeCategory}
                >
                  <option value="">-- Todas --</option>
                  {categories.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <input type="submit" value="Search" className="btn btn-info" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSearch;

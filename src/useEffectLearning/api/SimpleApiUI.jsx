import style from './apistyle.module.css';


export default function SimpleApiUI({
    products,
    setPagination,
    handleDeleteProduct,
    handleUpdateProduct, 
    setCategories
    // handleChangeCategories
}) {
  return (
    <>
      <div className={style.tableContainer}>
        <h1 style={{ textAlign: "center" }}>Simple API</h1>
        <hr />

        <div className={style.tableContainerWrapper}>
          <div className={style.tableContainer}>
            <div className={style.tableTopContainer}>
              <div className={style.paginationContainer}>
                <select
                  name="pagination"
                  id="pagination"
                  onChange={(event) => {
                    setPagination(event.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
                <p>entries per page</p>
              </div>

              <div className={style.paginationContainer}>
                <select
                  name="categories"
                  id="categories"
                  onChange={(event)=>{
                    setCategories(event.target.value);
                  }}
                >
                  <option value="all">All</option>
                  <option value="electronics">electronics</option>
                  <option value="jewelery">jewelery</option>
                  <option value="men's clothing">men's clothing</option>
                  <option value="women's clothing">women's clothing</option>
                </select>
                <p>Choose Categories</p>
              </div>

              <div className={style.searchContainer}>
                <input type="text" placeholder="search..." />
              </div>
            </div>
            <div className={style.tableWrapper}>
              <table className={style.apiTable}>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products.length !== 0 ? (
                    products.map((value, index) => {
                      const { id, title, price } = value;

                      return (
                        <tr key={index}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{id}</td>
                          <td>{title}</td>
                          <td>
                            <b>
                              <span>$</span>
                              {price}
                            </b>
                          </td>
                          <td className={style.tableBtnAction}>
                            <button
                              className={style.btnUpdate}
                              onClick={() => handleUpdateProduct(id)}
                            >
                              Update
                            </button>
                            <button
                              className={style.btnDelete}
                              onClick={() => handleDeleteProduct(id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <h2>Products are not available</h2>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

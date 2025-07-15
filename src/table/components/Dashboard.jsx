import { useContext } from "react"
import { Context } from "../context/Context"

export default function Dashboard(){
    const {userData, products, setProducts, logout} = useContext(Context);


    // =========VIEW PRODUCT============
    const handleView = (product_id) => {
        console.log(product_id);
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
            </div>
            </div>
        </div>
        </div>

    }


    //===========EDIT PRODUCT============
    const handleEdit = (product_id) => {
        console.log(product_id);

        {product_id 
            ? <h1>Hello</h1>
            : <p>Please select product</p>
    
        }
    
    }


    //===========DELETE PRODUCT==========
    const handleDelete = (product_id) => {
        const result = products.filter((product)=> {
            return product.id !== product_id
        })

        setProducts(result);
    }



    return(
        <div>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h2>Welcome, {userData.email}</h2>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
            

            <div className="container shadow p-4 mt-5" style={{overflowX:'auto'}}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           (products && products.length !== 0)  ? 
                                products.map((product)=>{
                                    const {image, title, description, price, rating, id} = product;
                                    return(
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{title}</td>
                                            <td>{description}</td>
                                            <td>${price}</td>
                                            <td><img src={image} alt={title} style={{width: '100%', height:'50px', objectFit:'contain'}} /></td>
                                            <td className="d-flex gap-2 align-items-center">
                                                <button className="btn btn-primary" onClick={() => handleView(id)}>View</button>
                                                <button className="btn btn-warning" onClick={()=> handleEdit(id)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                            <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
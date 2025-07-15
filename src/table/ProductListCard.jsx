import { useContext } from "react"
import { Context } from "./context/Context"

export default function ProductListCard(){
    const {products} = useContext(Context);

    function truncateWords(text, wordLimit){
        const word=text.split(' ');
        return word.length > wordLimit ?
            word.slice(0, wordLimit).join(' ')+ '...'
        :
            text;
    }

    return(<>
        <div className="container-fluid">
            <div className="cardContainer p-0 d-flex align-items-center justify-content-center flex-wrap">
                {
                    (products && products.length !== 0) ?

                        products.map((product) => {
                            const {image, title, description, price, rating, id} = product;

                            return(
                                <div className="card shadow col-12 col-sm-6 col-md-4 col-lg-3 my-1" style={{height:'400px'}} key={id}>
                                    <img 
                                            src={image} 
                                            alt={title} 
                                            style={{width:'100%', height:'150px', objectFit:"cover"}}
                                        />
                                    <div className="card-body">
                                        <h2 style={{fontSize:'1.1em'}}>{truncateWords(title,4)}</h2>
                                        <p>{truncateWords(description,10)}</p>
                                        <p><strong>$ {price}</strong></p>
                                    </div>
                                    <div className="card-footer d-flex gap-2 bg-white justify-content-between">
                                            <button className="btn btn-warning w-100">Buy Now</button>
                                            <button className="btn btn-warning w-100">Add to Cart</button>
                                        </div>
                            </div>
                            )
                        })
                    :
                    <></>

                }
                
            </div>
        </div>
    </>)
}
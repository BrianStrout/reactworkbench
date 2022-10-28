import { Link,  useParams }  from 'react-router-dom';
import merchCatalog from '../data/product-data.json'
import './singularproduct.css'

console.log(merchCatalog[3]);


const SingleProduct = () =>{
const { productId } = useParams();
const { productIdConverted } = parseInt(productId);

const focus = merchCatalog.find((product) => product.id == productId );
const { title, image, price, rating, description, id } = focus;

return(
        <section className='section-product'>
<div className='merch-focus-image'>
         <img className='focus-image' src={image} alt=""/>
        </div>
        <div className='merch-focus-title'>
        <h2> {title} </h2>
        </div>
        <div className='merch-focus-price'>
        </div>
        {price}
        <div className='merch-focus-description'>
        {description}
        </div>
        <div className='merch-focus-rating'>
        {rating.rate}{rating.count}
        </div>
        <Link to='/'>back to products</Link>
        

        </section>

)
}
export default SingleProduct


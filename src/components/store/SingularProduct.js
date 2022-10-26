import { Link,  useParams }  from 'react-router-dom';
import merchCatalog from '../data/product-data.json'
import './singularproduct.css'

console.log(merchCatalog[3]);


const SingleProduct = () =>{
const { productId } = useParams();
console.log(productId)
const focus = merchCatalog.find((product) => product.id === 1 );
const { title, image, price, rating, description, } = focus;



return(
        <section className='section-product'>
        <div className='merch-focus-image'>
         <img className='focus-image' src={image}/>
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



        <Link to='/storehome'>back to products</Link>
        </section>

)
}
export default SingleProduct


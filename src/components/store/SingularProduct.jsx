import { Link,  useParams }  from 'react-router-dom';
import merchCatalog from '../data/product-data.json'
import './singularproduct.css'
import { SingleProductInformation } from './SingularProductInformation';

console.log(merchCatalog[3]);


const avail = [
        {       color: "brown",
                small: true,
                medium: true,
                large: false,
                xtralarge: true},

        {       color: "brown",
                small: true,
                medium: true,
                large: false,
                xtralarge: true,},

        {       color: "brown",
                small: true,
                medium: true,
                large: false,
                xtralarge: true,},

        {       color: "brown",
                small: true,
                medium: true,
                large: false,
                xtralarge: true,}
];






const SingleProduct = () =>{
const { productId } = useParams();
const { productIdConverted } = parseInt(productId);

const focus = merchCatalog.find((product) => product.id == productId );
const { title, image, price, rating, description, id } = focus;

return(
        <section className='section-product'>
        <div className='merch-focus-title'>
        <h2> {title} </h2>
        </div>
        <div className='merch-alt-photo'>photo</div>

<div className='merch-focus-image'>
         <img className='focus-image' src={image} alt=""/>
        </div>

        <div className='merch-focus-details'>
        <SingleProductInformation 
                price = {price}
                rating = '4.5'
                true = {avail}


        />
        {price}reg $25.00
        sale info?
        
        Clearance save $3.75 (15% off)
        When purchased online (launch sidebar)

        4.9 out of 5 stars with 7 reviews (launch reviews)

        <h5>Size Group</h5>
        Adult General Sizing

        <h5>Color</h5>     variable here
        blocks Here



        Ship to 52404
Get it by Wed, Nov 2
Free shipping with RedCard or $35 orders - Exclusions Apply.
This item isn’t sold in stores
Create or manage registry
Save 5% every day
With RedCard
Sezzle image
4 interest-free payments
On orders over $35 with Sezzle




        </div>
      
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


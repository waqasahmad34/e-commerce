import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getProducts, categoryFilter, searchProduct, priceFilter } from '../../actions/product';
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

const Products = ({ getProducts, categoryFilter, priceFilter, searchProduct, product: { products, loading, productsLength }}) => {
    const [count, setCount] = useState({
        prev: 0,
        next: 10
      })
      const [hasMore, setHasMore] = useState(true);
      const [current, setCurrent] = useState(products.slice(count.prev, count.next));
          
    useEffect(()=>{
        getProducts();
     },[getProducts]);

      const getMoreData = () => {
        if (current.length === products.length) {
          setHasMore(false);
          return;
        }
        setTimeout(() => {
          setCurrent(current.concat(products.slice(count.prev + 10, count.next + 10)))
        }, 2000)
        setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
      }

    const handleSearch = (search) => {
        if(search){
            searchProduct(search);
        }else{
            getProducts();
        }
    }

    const handlePrice = (price) => {
        if(price){
            priceFilter(price);
        }else{
            getProducts();
        }
    }

    const handlePriceReset = () => {
        getProducts();
    }

    const handleCategory = (category) => {
        if(category){
            categoryFilter(category);
        }else{
            getProducts();
        }
    }
    return(
        <>
            <Header handleSearch={handleSearch} handlePriceReset={handlePriceReset} products={products} handlePrice={handlePrice} handleCategory={handleCategory}/>
            <InfiniteScroll
                dataLength={current.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                            {products && products.length > 0 && !loading ?
            products.map(({ id, title, description, category, images, date, price})=>
                <div key={id} style={{padding: '15px'}}>
                    <ProductCard title={title} price={price} description={description} category={category} images={images} date={date}/>
                </div>
            ) : 
            <div style={{padding: '15px'}}>
                {loading ?
                <>
                    <div style={{marginBottom: '20px'}}><Skeleton variant="rect" width={345} height={270} /></div>
                    <div style={{marginBottom: '20px'}}><Skeleton variant="rect" width={345} height={270} /></div>
                    <div style={{marginBottom: '20px'}}><Skeleton variant="rect" width={345} height={270} /></div>
                
                </>
                 : <Typography gutterBottom variant="h5" component="h2">
                        No Product Found!
                    </Typography>}
            </div>   
            }
            </InfiniteScroll>
          
        </>
    )
}

Products.propTypes = {
    getProducts: PropTypes.func.isRequired,
    searchProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    product: state.productReducer
  });

export default connect(mapStateToProps,{ getProducts,categoryFilter, priceFilter, searchProduct })(Products)

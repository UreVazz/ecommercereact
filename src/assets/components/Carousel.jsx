import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "./style.css";

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "productos");
      const snapshot = await getDocs(productsCollection);
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList.slice(0, 4)); // Mostrar solo los primeros 4
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,        
  autoplaySpeed: 2000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <Card>
              <CardMedia
                component="img"
                height="auto"
                image={product.imagen}
                alt={product.nombre}
              />
              <CardContent>
                <Typography variant="h6">{product.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.descripcion}
                </Typography>
                <Typography variant="subtitle1" className="product-price">
                  ${product.precio}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;

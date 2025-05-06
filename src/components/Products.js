import React, { useState, useEffect } from 'react';
import * as S from '../styles/LandingPageStyles';
import { useNavigate, Link } from 'react-router-dom';
import ZevaOatsImg from '../images/Zeva-Oats.png';
import DarkchocImg from '../images/Dark-choc.png';

const Products = () => {
  const [activeTab, setActiveTab] = useState('sweet');
  const [currentProduct, setCurrentProduct] = useState(0);

  const products = {
    sweet: [
      {
        id: 1,
        title: "Dark Cacao",
        tagline: "The sweetness without the sugar spike.",
        image: DarkchocImg,
        description: "Rich chocolate flavor meets nutritious oats. A guilt-free way to satisfy your chocolate cravings in the morning.",
        price: "$7.49"
      },

      {
        id: 2,
        title: "Gulab Date Delight",
        tagline: "Romance your morning",
        image: ZevaOatsImg,
        description: "A delicate blend of rose water, soft dates, and crunchy pistachios with a kiss of cardamom. Inspired by the rich flavors of Indian mithai, this bowl is where breakfast meets poetry. Packed with antioxidants and natural sweetness from seasonal berries.",
        price: "$7.99"
      }

    ],
    savoury: [
      {
        id: 4,
        title: "Spicy Masala",
        image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Traditional Indian spices meet modern oats. A perfect blend of heat and nutrition to start your day.",
        price: "$7.99"
      },
      {
        id: 5,
        title: "Mediterranean",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Olives, feta, and herbs combine with oats for a Mediterranean twist on breakfast.",
        price: "$8.49"
      }
    ],
    kids: [
      {
        id: 6,
        title: "Monkey Mix",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tagline: "Built for little explorers.",
        description: "Banana, peanut butter, and a touch of honey. Designed to energize your little monkey from school to sports.",
        price: "$6.49"
      },

    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    document.querySelectorAll('.animated-content').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handlePrevProduct = () => {
    setCurrentProduct(prev => 
      prev === 0 ? products[activeTab].length - 1 : prev - 1
    );
  };

  const handleNextProduct = () => {
    setCurrentProduct(prev => 
      prev === products[activeTab].length - 1 ? 0 : prev + 1
    );
  };

  const currentProductData = products[activeTab][currentProduct];

  return (
    <S.Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <S.BackHomeLink>← Home</S.BackHomeLink>
      </Link>
      <S.TopNavigation>


      </S.TopNavigation>
      <S.Section background="#000">
        <S.AnimatedContent className="animated-content" direction="left">
          <S.Title>Our Products</S.Title>
          <S.Subtitle>Discover our range of nutritious overnight oats</S.Subtitle>
          
          <S.ProductTabs>
            <S.ProductTab 
              active={activeTab === 'sweet'} 
              onClick={() => {
                setActiveTab('sweet');
                setCurrentProduct(0);
              }}
            >
              ZeV̇a Sweet
            </S.ProductTab>
            <S.ProductTab 
              active={activeTab === 'savoury'} 
              onClick={() => {
                setActiveTab('savoury');
                setCurrentProduct(0);
              }}
            >
              ZeV̇a Savoury
            </S.ProductTab>
            <S.ProductTab 
              active={activeTab === 'kids'} 
              onClick={() => {
                setActiveTab('kids');
                setCurrentProduct(0);
              }}
            >
              ZeV̇a For Kids
            </S.ProductTab>
          </S.ProductTabs>

          {activeTab === 'savoury' || activeTab === 'kids' ? (
            <div style={{
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 700,
              padding: '60px 0'
            }}>
              COMING SOON
            </div>
          ) : (
            <S.ProductCarousel>
              <S.CarouselButton className="left" onClick={handlePrevProduct}>
                ←
              </S.CarouselButton>
              
              <S.ProductImage>
                <img src={currentProductData.image} alt={currentProductData.title} />
              </S.ProductImage>
              
              <S.ProductInfo>
                <S.ProductTitle>{currentProductData.title}</S.ProductTitle>
                <div style={{ fontStyle: 'italic', color: '#e2c275', marginBottom: 10 }}>
                  {currentProductData.tagline}
                </div>
                <S.ProductDescription>{currentProductData.description}</S.ProductDescription>
                <S.ProductPrice>{currentProductData.price}</S.ProductPrice>
                <S.ProductButton>Add to Cart</S.ProductButton>
              </S.ProductInfo>
              
              <S.CarouselButton className="right" onClick={handleNextProduct}>
                →
              </S.CarouselButton>
            </S.ProductCarousel>
          )}
        </S.AnimatedContent>
      </S.Section>
    </S.Container>
  );
};

export default Products; 
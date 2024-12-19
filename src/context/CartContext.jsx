import { createContext, useState } from "react";
import {
  NightSkyThumbnail,
  FutureThumbnail,
  MotherNatureThumbnail,
  JulienImage,
  MariaImage,
  WithTheStars,
  SummerThumbnail,
  QuietThumbnail,
  TravelThumbnail,
  TheRainThumbnail,
} from "../utils/images";
import { ArtistImage } from "../utils/images";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cardCollections = [
    {
      id: 1,
      image: NightSkyThumbnail,
      title: "Night Sky",
      price: "0.12BTC - 0.18BBTC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo",
      tags: "120 NTF",
      artist: "Léa Jacquot",
      artistImage: ArtistImage,
    },
    {
      id: 2,
      image: FutureThumbnail,
      title: "Future",
      price: "0.12BTC - 0.18BBTC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo",
      tags: "120 NTF",
      artist: "Julien",
      artistImage: JulienImage,
    },
    {
      id: 3,
      image: MotherNatureThumbnail,
      title: "Mother Nature",
      price: "0.12BTC - 0.18BBTC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo",
      tags: "120 NTF",
      artist: "Maria",
      artistImage: MariaImage,
    },
  ];

  const nftCollections = [
    {
      id: 1,
      image: NightSkyThumbnail,
      title: "Night is coming",
      price: "0.12 BTC",
    },
    {
      id: 2,
      image: WithTheStars,
      title: "With the stars",
      price: "0.12 BTC",
    },
    {
      id: 3,
      image: SummerThumbnail,
      title: "Summer",
      price: "0.12 BTC",
    },
    {
      id: 4,
      image: QuietThumbnail,
      title: "Quiet",
      price: "0.14 BTC",
    },
    {
      id: 5,
      image: TravelThumbnail,
      title: "Travel",
      price: "0.12 BTC",
    },
    {
      id: 6,
      image: TheRainThumbnail,
      title: "The rain",
      price: "0.18 BTC",
    },
  ];

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        cartItems,
        addToCart,
        removeFromCart,
        cardCollections,
        nftCollections,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

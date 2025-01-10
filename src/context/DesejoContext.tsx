import React, { createContext, useContext, useState } from 'react';

interface WishListContextType {
  wishList: any[];
  addToWishList: (movie: any) => void;
  removeFromWishList: (id: string) => void;
}

const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const WishListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishList, setWishList] = useState<any[]>([]);

  const addToWishList = (movie: any) => {
    if (!wishList.find((item) => item.id === movie.id)) {
      setWishList((prevList) => [...prevList, movie]);
    }
  };

  const removeFromWishList = (id: string) => {
    setWishList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error('useWishList must be used within a WishListProvider');
  }
  return context;
};

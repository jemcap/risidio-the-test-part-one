import React from "react";
import Card from "./Card";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Collections = () => {
  const { cardCollections } = useContext(CartContext);
  return (
    <section className=" h-full align-elements rounded-[30px]">
      <div className="mt-24">
        <h1 className="text-[24px] font-[800] leading-[29.05px]">
          Collections
        </h1>
        <div className="flex flex-col lg:flex-row gap-[32px] mt-10 mb-[153px] h-full">
          {cardCollections.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

import Icon from "@/components/Icon";
import React from "react";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-3.5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 px-6 lg:justify-center lg:gap-40 lg:mt-10">
        <Icon
          href="/trips/search?text=Chalé"
          path="/cottage-icon.png"
          name="Chalé"
          alt="Pesquisar Chalés"
        />
        <Icon
          href="/trips/search?text=Fazenda"
          path="/farm-icon.png"
          name="Fazenda"
          alt="Pesquisar Fazendas"
        />
        <Icon
          href="/trips/search?text=Hotel"
          path="/hotel-icon.png"
          name="Hotel"
          alt="Pesquisar Hotéis"
        />
        <Icon
          href="/trips/search?text=Pousada"
          path="/inn-icon.png"
          name="Pousada"
          alt="Pesquisar Pousadas"
        />
      </div>
    </div>
  );
};

export default QuickSearch;

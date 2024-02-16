"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";
import Link from "next/link";

import Button from "@/components/Button";
import TripItem from "@/components/TripItem";

const MyFavorites = () => {
  const [favorites, setFavorites] = useState<
    Prisma.FavoritoGetPayload<{
      include: { trip: true };
    }>[]
  >([]);

  const { status, data } = useSession();

  const router = useRouter();

  const fetchFavorites = async () => {
    const response = await fetch(
      `/api/user/${(data?.user as any)?.id}/favorites`,
    );

    if (!response.ok) {
      console.error("Error fetching favorites");
      return;
    }

    const json = await response.json();

    setFavorites(json);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/");
    }

    fetchFavorites();
  }, [status]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl lg:mb-5">
        Minhas Viagens Favoritas
      </h1>
      {favorites.length > 0 ? (
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-14">
          {favorites?.map(favorite => (
            <TripItem
              key={favorite.tripId}
              trip={favorite.trip}
              fetchFavorites={fetchFavorites}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col lg:max-w-[500px]">
          <p className="mt-2 font-medium text-primaryDarker">
            Você ainda não tem nenhuma viagem favorita! =(
          </p>

          <Link href="/">
            <Button className="w-full mt-2 lg:mt-5">Explorar Viagens</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyFavorites;

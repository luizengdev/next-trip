"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";

const HeartButton = ({ tripId, onFavoriteToggle }) => {
  const [hasFavorited, setHasFavorited] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (session) {
        const response = await fetch(`/api/favorites/${tripId}`);
        if (response.ok) {
          const text = await response.text();
          if (text) {
            const favorites = JSON.parse(text);
            const isFavorited = favorites.some(
              favorite => (session.user as any).id === favorite.userId,
            );
            setHasFavorited(isFavorited);
          }
        } else {
          console.error("Falha ao buscar favoritos");
        }
      }
    };

    fetchFavoriteStatus();
  }, [session, tripId]);

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!session || !session.user || !(session.user as any).id) {
      return toast.error("Você precisa estar logado para favoritar!", {
        position: "bottom-center",
      });
    }

    const method = hasFavorited ? "DELETE" : "POST";
    const response = await fetch(`/api/favorites/${tripId}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: (session.user as any)?.id,
        tripId,
      }),
    });

    if (response.ok) {
      setHasFavorited(prev => !prev);
      if (typeof onFavoriteToggle === "function") {
        onFavoriteToggle();
      }
    } else {
      console.error("Falha ao favoritar");
    }
  };

  return (
    <div
      onClick={toggleFavorite}
      className="
        absolute
        top-[2px]
        right-[2px]
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
        "
      />
      <AiFillHeart
        size={28}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;

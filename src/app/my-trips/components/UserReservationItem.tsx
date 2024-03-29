import React, { useState } from "react";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";
import { format, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Modal from "@/app/my-trips/components/Modal";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
  fetchReservations: () => void;
}

const UserReservationItem = ({
  reservation,
  fetchReservations,
}: UserReservationItemProps) => {
  const { trip } = reservation;

  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return toast.error("Ocorreu um erro ao cancelar a reserva!");
    }

    toast.success("Reserva cancelada com sucesso!", {
      position: "bottom-center",
    });

    fetchReservations();
  };

  const days = differenceInDays(
    new Date(reservation.endDate),
    new Date(reservation.startDate),
  );

  return (
    <div>
      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 text-primaryDarker">
          <h3 className="text-sm font-semibold">Data</h3>
          <div className="flex items-center gap-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd/MM/yyyy", {
                locale: ptBR,
              })}
            </p>
            {" a "}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd/MM/yyyy", {
                locale: ptBR,
              })}
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <h3 className="font-semibold mt-5 text-sm">Hóspedes</h3>
              <p className="text-sm pb-5">{reservation.guests} hóspedes</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mt-5">
                Quantidade de Diárias
              </h3>
              <p>{days} diárias</p>
            </div>
          </div>

          <h3 className="font-semibold text-primaryDarker mt-3 pt-5 border-t border-solid border-grayLighter">
            Informações sobre o preço
          </h3>

          <div className="flex justify-between mt-1">
            <p className="text-primaryDarker text-sm mt-2">Total:</p>
            <p className="font-medium text-sm">
              R${Number(reservation.totalPaid).toFixed(2).replace(".", ",")}
            </p>
          </div>

          <Button
            variant="danger"
            className="mt-5"
            onClick={() => setShowModal(true)}
          >
            Cancelar
          </Button>

          {/* Modal de confirmação */}
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <h2 className="flex font-semibold text-primaryDarker mb-2">
                Tem certeza que deseja cancelar esta reserva?
              </h2>
              <Button variant="danger" onClick={handleDeleteClick}>
                Sim, cancelar a reserva
              </Button>
              <Button className="mt-4" onClick={() => setShowModal(false)}>
                Voltar
              </Button>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserReservationItem;

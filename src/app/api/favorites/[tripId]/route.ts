import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { tripId } }: { params: { tripId: string } },
) {
  if (!tripId) {
    return new Response(
      JSON.stringify({
        body: {
          message: "Missing tripId",
        },
      }),
      {
        status: 400,
      },
    );
  }
  const favorites = await prisma.favorito.findMany({
    where: {
      tripId: tripId,
    },
  });

  return new NextResponse(JSON.stringify(favorites), { status: 200 });
}

export async function POST(request: Request) {
  const req = await request.json();

  const trip = await prisma.trip.findMany({
    where: {
      id: req.tripId,
    },
  });

  if (!trip) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "TRIP_NOT_FOUND",
        },
      }),
    );
  }

  await prisma.favorito.create({
    data: {
      userId: req.userId,
      tripId: req.tripId,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 },
  );
}

export async function DELETE(request: Request) {
  const req = await request.json();

  const trip = await prisma.trip.findUnique({
    where: {
      id: req.tripId,
    },
  });

  if (!trip) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "TRIP_NOT_FOUND",
        },
      }),
    );
  }

  await prisma.favorito.delete({
    where: {
      userId_tripId: {
        userId: req.userId,
        tripId: req.tripId,
      },
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 200 },
  );
}

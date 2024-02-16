import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params: { userId } }: { params: { userId: string } },
) {
  const { searchParams } = new URL(request.url);

  if (!userId) {
    return new Response(
      JSON.stringify({
        body: {
          message: "Missing userId",
        },
      }),
      {
        status: 400,
      },
    );
  }

  const favorites = await prisma.favorito.findMany({
    where: {
      userId: userId,
    },
    include: {
      trip: true,
    },
  });

  console.log({ favorites });

  return new Response(JSON.stringify(favorites), { status: 200 });
}

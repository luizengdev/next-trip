/*
  Warnings:

  - The primary key for the `Favorito` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Favorito` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Favorito" DROP CONSTRAINT "Favorito_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Favorito_pkey" PRIMARY KEY ("userId", "tripId");

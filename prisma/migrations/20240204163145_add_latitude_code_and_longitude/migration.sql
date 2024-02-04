/*
  Warnings:

  - You are about to drop the column `Highlights` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `MaxGuests` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationDescription` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxGuests` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "Highlights",
DROP COLUMN "MaxGuests",
ADD COLUMN     "highlights" TEXT[],
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationDescription" TEXT NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "maxGuests" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "guests" INTEGER NOT NULL DEFAULT 5;

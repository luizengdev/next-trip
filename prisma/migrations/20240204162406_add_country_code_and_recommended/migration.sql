/*
  Warnings:

  - Added the required column `latidute` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationDescription` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "latidute" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationDescription" TEXT NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "guests" INTEGER NOT NULL DEFAULT 5;

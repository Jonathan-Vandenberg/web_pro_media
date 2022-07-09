/*
  Warnings:

  - Added the required column `projectId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `projectId` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL;

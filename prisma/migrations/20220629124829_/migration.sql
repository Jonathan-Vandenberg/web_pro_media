/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_customerId_fkey`;

-- AlterTable
ALTER TABLE `Customer` MODIFY `phone` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Project`;

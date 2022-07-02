/*
  Warnings:

  - The primary key for the `Functionality` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customerId` on the `Functionality` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Functionality` DROP FOREIGN KEY `Functionality_customerId_fkey`;

-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `functionalityId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Functionality` DROP PRIMARY KEY,
    DROP COLUMN `customerId`;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_functionalityId_fkey` FOREIGN KEY (`functionalityId`) REFERENCES `Functionality`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

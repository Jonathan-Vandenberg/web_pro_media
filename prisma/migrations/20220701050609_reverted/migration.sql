/*
  Warnings:

  - You are about to drop the column `functionalityId` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Functionality` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Customer` DROP FOREIGN KEY `Customer_functionalityId_fkey`;

-- AlterTable
ALTER TABLE `Customer` DROP COLUMN `functionalityId`;

-- AlterTable
ALTER TABLE `Functionality` ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`, `customerId`);

-- AddForeignKey
ALTER TABLE `Functionality` ADD CONSTRAINT `Functionality_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

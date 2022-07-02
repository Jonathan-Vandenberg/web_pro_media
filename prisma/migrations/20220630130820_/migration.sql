/*
  Warnings:

  - Made the column `customerId` on table `Functionality` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Functionality` DROP FOREIGN KEY `Functionality_customerId_fkey`;

-- AlterTable
ALTER TABLE `Functionality` MODIFY `customerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`, `customerId`);

-- AddForeignKey
ALTER TABLE `Functionality` ADD CONSTRAINT `Functionality_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

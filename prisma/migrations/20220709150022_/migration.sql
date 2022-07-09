/*
  Warnings:

  - You are about to drop the column `customerId` on the `Functionality` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerIdRequire]` on the table `Functionality` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerIdRequire` to the `Functionality` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Functionality` DROP FOREIGN KEY `Functionality_customerId_fkey`;

-- AlterTable
ALTER TABLE `Functionality` DROP COLUMN `customerId`,
    ADD COLUMN `customerIdRequire` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Functionality_customerIdRequire_key` ON `Functionality`(`customerIdRequire`);

-- AddForeignKey
ALTER TABLE `Functionality` ADD CONSTRAINT `Functionality_customerIdRequire_fkey` FOREIGN KEY (`customerIdRequire`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

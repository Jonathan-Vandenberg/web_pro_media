/*
  Warnings:

  - You are about to drop the column `payment` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `payment`;

-- CreateTable
CREATE TABLE `Functionality` (
    `id` VARCHAR(191) NOT NULL,
    `calender` BOOLEAN NOT NULL DEFAULT false,
    `chatPopup` BOOLEAN NOT NULL DEFAULT false,
    `contactForm` BOOLEAN NOT NULL DEFAULT false,
    `emailMarketing` BOOLEAN NOT NULL DEFAULT false,
    `map` BOOLEAN NOT NULL DEFAULT false,
    `photoGallery` BOOLEAN NOT NULL DEFAULT false,
    `productCatalog` BOOLEAN NOT NULL DEFAULT false,
    `productSearch` BOOLEAN NOT NULL DEFAULT false,
    `videoGallery` BOOLEAN NOT NULL DEFAULT false,
    `api` BOOLEAN NOT NULL DEFAULT false,
    `blog` BOOLEAN NOT NULL DEFAULT false,
    `blogComments` BOOLEAN NOT NULL DEFAULT false,
    `blogPosts` BOOLEAN NOT NULL DEFAULT false,
    `other` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NULL,

    UNIQUE INDEX `Functionality_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Project_id_key` ON `Project`(`id`);

-- AddForeignKey
ALTER TABLE `Functionality` ADD CONSTRAINT `Functionality_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

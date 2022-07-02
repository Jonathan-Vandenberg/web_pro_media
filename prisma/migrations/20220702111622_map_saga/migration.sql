/*
  Warnings:

  - You are about to drop the column `map` on the `Functionality` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Functionality` DROP COLUMN `map`;

-- AlterTable
ALTER TABLE `Project` MODIFY `projectName` VARCHAR(191) NULL,
    MODIFY `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NULL DEFAULT 'NOT_STARTED';

-- CreateTable
CREATE TABLE `Map` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL,
    `price` INTEGER NOT NULL,
    `notes` VARCHAR(191) NULL,
    `startDate` VARCHAR(191) NULL,
    `endDate` VARCHAR(191) NULL,
    `projectId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Map_id_key`(`id`),
    UNIQUE INDEX `Map_projectId_key`(`projectId`),
    PRIMARY KEY (`id`, `projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Map` ADD CONSTRAINT `Map_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

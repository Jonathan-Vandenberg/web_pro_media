/*
  Warnings:

  - You are about to alter the column `status` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Project_status")`.

*/
-- AlterTable
ALTER TABLE `Project` ADD COLUMN `endDate` VARCHAR(191) NULL,
    ADD COLUMN `startDate` VARCHAR(191) NULL,
    MODIFY `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED';

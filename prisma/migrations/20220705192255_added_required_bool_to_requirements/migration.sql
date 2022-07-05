-- AlterTable
ALTER TABLE `Blog` ADD COLUMN `required` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Map` ADD COLUMN `required` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `PhotoGallery` ADD COLUMN `required` BOOLEAN NOT NULL DEFAULT false;

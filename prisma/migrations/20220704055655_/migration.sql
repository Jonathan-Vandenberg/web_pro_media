-- DropForeignKey
ALTER TABLE `Blog` DROP FOREIGN KEY `Blog_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Functionality` DROP FOREIGN KEY `Functionality_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `Map` DROP FOREIGN KEY `Map_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `PhotoGallery` DROP FOREIGN KEY `PhotoGallery_projectId_fkey`;

-- AddForeignKey
ALTER TABLE `Functionality` ADD CONSTRAINT `Functionality_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Map` ADD CONSTRAINT `Map_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PhotoGallery` ADD CONSTRAINT `PhotoGallery_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

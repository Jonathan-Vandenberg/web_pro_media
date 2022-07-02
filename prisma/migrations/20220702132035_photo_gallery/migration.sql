-- CreateTable
CREATE TABLE `PhotoGallery` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NULL,
    `price` INTEGER NULL,
    `notes` VARCHAR(191) NULL,
    `startDate` VARCHAR(191) NULL,
    `endDate` VARCHAR(191) NULL,
    `projectId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PhotoGallery_id_key`(`id`),
    UNIQUE INDEX `PhotoGallery_projectId_key`(`projectId`),
    PRIMARY KEY (`id`, `projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PhotoGallery` ADD CONSTRAINT `PhotoGallery_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

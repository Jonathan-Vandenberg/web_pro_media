-- CreateTable
CREATE TABLE `Customer` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(191) NOT NULL,
    `projectName` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `startDate` VARCHAR(191) NULL,
    `endDate` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `websiteType` ENUM('ECOMMERCE_WEBSITE', 'BUSINESS_WEBSITE', 'BLOG_WEBSITE', 'PORTFOLIO_WEBSITE', 'EVENT_WEBSITE', 'PERSONAL_WEBSITE', 'MEMBERSHIP_WEBSITE', 'NONPROFIT_WEBSITE', 'INFORMATIONAL_WEBSITE', 'ONLINE_FORUM', 'OTHER') NOT NULL DEFAULT 'ECOMMERCE_WEBSITE',
    `websiteCategory` ENUM('AUTOMOTIVE', 'BUSINESS_SUPPORT_AND_SUPPLIES', 'COMPUTERS_AND_ELECTRONICS', 'CONTRUCTION_AND_CONTRACTING', 'EDUCATION', 'ENTERTAINMENT', 'FOOD_AND_DINING', 'HEALTH_AND_MEDICINE', 'HOME_AND_GARDEN', 'LEGAl_AND_FINANCIAL', 'MANUFACTURING_WHOLESALE_AND_DISTRIBUTION', 'MERCHANTS_AND_RETAIL', 'PERSONAL_CARE_AND_SERVICES', 'REAL_ESTATE', 'TRAVEL_AND_TRANSPORTATION', 'OTHER') NOT NULL DEFAULT 'AUTOMOTIVE',
    `customerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Project_customerId_key`(`customerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Functionality` (
    `id` VARCHAR(191) NOT NULL,
    `calender` BOOLEAN NOT NULL DEFAULT false,
    `chatPopup` BOOLEAN NOT NULL DEFAULT false,
    `contactForm` BOOLEAN NOT NULL DEFAULT false,
    `emailMarketing` BOOLEAN NOT NULL DEFAULT false,
    `photoGallery` BOOLEAN NOT NULL DEFAULT false,
    `productCatalog` BOOLEAN NOT NULL DEFAULT false,
    `productSearch` BOOLEAN NOT NULL DEFAULT false,
    `videoGallery` BOOLEAN NOT NULL DEFAULT false,
    `api` BOOLEAN NOT NULL DEFAULT false,
    `other` VARCHAR(191) NULL,
    `customerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Functionality_id_key`(`id`),
    UNIQUE INDEX `Functionality_customerId_key`(`customerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Timeline` (
    `id` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Timeline_customerId_key`(`customerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clarify` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clarify_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FunctionalityTimeline` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `FunctionalityTimeline_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Layout` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Layout_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tools` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tools_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImplementFunctionality` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ImplementFunctionality_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImplementDesign` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ImplementDesign_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Review_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alterations` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Alterations_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testing` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Testing_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deploy` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
    `timelineId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Deploy_timelineId_key`(`timelineId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Map` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NULL DEFAULT 'NOT_STARTED',
    `name` VARCHAR(191) NULL DEFAULT 'Map',
    `required` BOOLEAN NOT NULL DEFAULT false,
    `price` INTEGER NULL,
    `notes` VARCHAR(191) NULL,
    `startDate` VARCHAR(191) NULL,
    `endDate` VARCHAR(191) NULL,
    `projectId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Map_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PhotoGallery` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NULL DEFAULT 'NOT_STARTED',
    `name` VARCHAR(191) NULL DEFAULT 'Photo Gallery',
    `required` BOOLEAN NOT NULL DEFAULT false,
    `price` INTEGER NULL,
    `notes` VARCHAR(191) NULL,
    `startDate` VARCHAR(191) NULL,
    `endDate` VARCHAR(191) NULL,
    `projectId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PhotoGallery_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED') NULL DEFAULT 'NOT_STARTED',
    `name` VARCHAR(191) NULL DEFAULT 'Blog',
    `required` BOOLEAN NOT NULL DEFAULT false,
    `price` INTEGER NULL,
    `notes` VARCHAR(191) NULL,
    `startDate` VARCHAR(191) NULL,
    `endDate` VARCHAR(191) NULL,
    `commentSection` BOOLEAN NULL,
    `socialSharing` BOOLEAN NULL,
    `projectId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Blog_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Card` (
    `projectName` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `customerID` VARCHAR(191) NULL,

    UNIQUE INDEX `Card_projectName_key`(`projectName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Functionality` ADD CONSTRAINT `Functionality_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Timeline` ADD CONSTRAINT `Timeline_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clarify` ADD CONSTRAINT `Clarify_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FunctionalityTimeline` ADD CONSTRAINT `FunctionalityTimeline_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Layout` ADD CONSTRAINT `Layout_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tools` ADD CONSTRAINT `Tools_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImplementFunctionality` ADD CONSTRAINT `ImplementFunctionality_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImplementDesign` ADD CONSTRAINT `ImplementDesign_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alterations` ADD CONSTRAINT `Alterations_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Testing` ADD CONSTRAINT `Testing_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deploy` ADD CONSTRAINT `Deploy_timelineId_fkey` FOREIGN KEY (`timelineId`) REFERENCES `Timeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Map` ADD CONSTRAINT `Map_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PhotoGallery` ADD CONSTRAINT `PhotoGallery_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

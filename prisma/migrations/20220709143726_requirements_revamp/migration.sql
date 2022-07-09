/*
  Warnings:

  - You are about to drop the column `api` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `calender` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `chatPopup` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `contactForm` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `emailMarketing` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `other` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `photoGallery` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `productCatalog` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `productSearch` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `videoGallery` on the `Functionality` table. All the data in the column will be lost.
  - Added the required column `blogCommentsRequire` to the `Functionality` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogPostsRequire` to the `Functionality` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogRequire` to the `Functionality` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapRequire` to the `Functionality` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Functionality` DROP COLUMN `api`,
    DROP COLUMN `calender`,
    DROP COLUMN `chatPopup`,
    DROP COLUMN `contactForm`,
    DROP COLUMN `emailMarketing`,
    DROP COLUMN `other`,
    DROP COLUMN `photoGallery`,
    DROP COLUMN `productCatalog`,
    DROP COLUMN `productSearch`,
    DROP COLUMN `videoGallery`,
    ADD COLUMN `apiRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `blogCommentsRequire` BOOLEAN NOT NULL,
    ADD COLUMN `blogPostsRequire` BOOLEAN NOT NULL,
    ADD COLUMN `blogRequire` BOOLEAN NOT NULL,
    ADD COLUMN `calenderRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `chatPopupRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `contactFormRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `emailMarketingRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `mapRequire` BOOLEAN NOT NULL,
    ADD COLUMN `otherRequire` VARCHAR(191) NULL,
    ADD COLUMN `photoGalleryRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `productCatalogRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `productSearchRequire` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `videoGalleryRequire` BOOLEAN NOT NULL DEFAULT false;

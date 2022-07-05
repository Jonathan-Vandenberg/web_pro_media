/*
  Warnings:

  - The primary key for the `Blog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Functionality` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Map` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PhotoGallery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Timeline` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[customerId]` on the table `Functionality` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customerId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Blog` DROP PRIMARY KEY;

-- AlterTable
ALTER TABLE `Functionality` DROP PRIMARY KEY;

-- AlterTable
ALTER TABLE `Map` DROP PRIMARY KEY;

-- AlterTable
ALTER TABLE `PhotoGallery` DROP PRIMARY KEY;

-- AlterTable
ALTER TABLE `Project` DROP PRIMARY KEY;

-- AlterTable
ALTER TABLE `Timeline` DROP PRIMARY KEY;

-- CreateIndex
CREATE UNIQUE INDEX `Functionality_customerId_key` ON `Functionality`(`customerId`);

-- CreateIndex
CREATE UNIQUE INDEX `Project_customerId_key` ON `Project`(`customerId`);

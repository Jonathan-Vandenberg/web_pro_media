/*
  Warnings:

  - You are about to alter the column `commentSection` on the `Blog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `socialSharing` on the `Blog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to drop the column `blog` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `blogComments` on the `Functionality` table. All the data in the column will be lost.
  - You are about to drop the column `blogPosts` on the `Functionality` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Blog` MODIFY `commentSection` BOOLEAN NULL,
    MODIFY `socialSharing` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `Functionality` DROP COLUMN `blog`,
    DROP COLUMN `blogComments`,
    DROP COLUMN `blogPosts`;

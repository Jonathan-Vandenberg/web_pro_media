/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Project` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`, `customerId`);

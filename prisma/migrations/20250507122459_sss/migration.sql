/*
  Warnings:

  - Added the required column `pfp_url` to the `Bot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bot` ADD COLUMN `pfp_url` VARCHAR(191) NOT NULL;

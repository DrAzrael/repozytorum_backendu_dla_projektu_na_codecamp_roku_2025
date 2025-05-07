/*
  Warnings:

  - Added the required column `embedding` to the `Bot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bot` ADD COLUMN `embedding` JSON NOT NULL;

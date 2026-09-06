/*
  Warnings:

  - Added the required column `action` to the `case_history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "case_history" ADD COLUMN     "action" TEXT NOT NULL,
ALTER COLUMN "newStatus" DROP NOT NULL;

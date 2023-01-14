/*
  Warnings:

  - You are about to drop the column `description` on the `history` table. All the data in the column will be lost.
  - You are about to drop the `task_history` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_task` to the `history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `history` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "task_history" DROP CONSTRAINT "task_history_id_History_fkey";

-- DropForeignKey
ALTER TABLE "task_history" DROP CONSTRAINT "task_history_id_task_fkey";

-- AlterTable
ALTER TABLE "history" DROP COLUMN "description",
ADD COLUMN     "id_task" TEXT NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL;

-- DropTable
DROP TABLE "task_history";

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_id_task_fkey" FOREIGN KEY ("id_task") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

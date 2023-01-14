/*
  Warnings:

  - Changed the type of `description` on the `history` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "history" DROP COLUMN "description",
ADD COLUMN     "description" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "task_history" (
    "id" TEXT NOT NULL,
    "id_task" TEXT NOT NULL,
    "id_History" TEXT NOT NULL,

    CONSTRAINT "task_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "task_history" ADD CONSTRAINT "task_history_id_task_fkey" FOREIGN KEY ("id_task") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_history" ADD CONSTRAINT "task_history_id_History_fkey" FOREIGN KEY ("id_History") REFERENCES "history"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

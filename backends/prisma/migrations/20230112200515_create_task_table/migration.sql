-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'New',
    "priority" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

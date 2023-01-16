-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tech" (
    "id" TEXT NOT NULL,
    "tech" TEXT NOT NULL,

    CONSTRAINT "tech_pkey" PRIMARY KEY ("id")
);

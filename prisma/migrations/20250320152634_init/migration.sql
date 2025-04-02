-- CreateTable
CREATE TABLE "AssignedSubject" (
    "id" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "AssignedSubject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AssignedSubject" ADD CONSTRAINT "AssignedSubject_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignedSubject" ADD CONSTRAINT "AssignedSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

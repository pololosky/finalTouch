-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isSubscribed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Template" (
    "id" SERIAL NOT NULL,
    "Lastname" TEXT NOT NULL DEFAULT 'Name',
    "firstName" TEXT NOT NULL DEFAULT 'firstName',
    "jobTitle" TEXT NOT NULL DEFAULT 'YourJob',
    "Departement" TEXT NOT NULL DEFAULT 'Your departement',
    "company" TEXT NOT NULL DEFAULT 'Your company',
    "Officephone" TEXT NOT NULL DEFAULT 'office tel',
    "MobilPhone" TEXT NOT NULL DEFAULT 'mobile tel',
    "website" TEXT NOT NULL DEFAULT 'webSite',
    "email" TEXT NOT NULL DEFAULT 'your email',
    "Adresse" TEXT NOT NULL DEFAULT '',
    "Instagram" TEXT NOT NULL DEFAULT '',
    "facebook" TEXT NOT NULL DEFAULT '',
    "twitter" TEXT NOT NULL DEFAULT '',
    "LinkedIn" TEXT NOT NULL DEFAULT '',
    "WhatsApp" TEXT NOT NULL DEFAULT '',
    "PersonnalImage" TEXT NOT NULL DEFAULT '',
    "LogoImage" TEXT NOT NULL DEFAULT '',
    "HandWrittingImage" TEXT NOT NULL DEFAULT '',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Template_userId_key" ON "public"."Template"("userId");

-- AddForeignKey
ALTER TABLE "public"."Template" ADD CONSTRAINT "Template_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

"use server";
import prisma from "../../lib/prisma";

// function to save user data to database
export async function saveUserData(email: string, name: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      await prisma.user.create({
        data: { email, name },
      });
    } else {
      const existingTemplate = await prisma.template.findUnique({
        where: { userId: user.id },
      });
      if (!existingTemplate) {
        await prisma.template.create({
          data: { userId: user.id },
        });
      }
    }
  } catch (error) {
    throw new Error("Error saving user data: " + (error as Error).message);
  }
}




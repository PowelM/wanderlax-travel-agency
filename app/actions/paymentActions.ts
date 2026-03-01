"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { PaymentStatus } from "@prisma/client";

export async function getPaymentsData() {
  try {
    const payments = await prisma.payment.findMany({
      include: {
        booking: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 20
    });

    const totalRevenue = await prisma.payment.aggregate({
      _sum: {
        amount: true
      },
      where: {
        status: PaymentStatus.PAID
      }
    });

    return {
      success: true,
      payments: JSON.parse(JSON.stringify(payments)),
      totalRevenue: Number(totalRevenue._sum?.amount || 0)
    };
  } catch (error: unknown) {
    console.error("Error fetching payment data:", error);
    return { success: false, error: error.message };
  }
}

export async function createManualInvoice(data: { bookingId: string, dueDate: Date, subtotal: number, tax: number, total: number }) {
  try {
    const invoiceNumber = `INV-${Date.now()}`;
    
    const invoice = await prisma.invoice.create({
      data: {
        invoiceNumber,
        bookingId: data.bookingId,
        dueDate: data.dueDate,
        subtotal: data.subtotal,
        tax: data.tax,
        total: data.total,
        status: 'UNPAID',
      }
    });

    revalidatePath('/admin/payments');
    return { success: true, invoice: JSON.parse(JSON.stringify(invoice)) };
  } catch (error: unknown) {
    console.error("Error creating manual invoice:", error);
    return { success: false, error: error.message };
  }
}

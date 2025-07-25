import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface RequestFormData {
  name: string;
  email: string;
  phone: string;
  size: string;
  length: string;
  custom: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, size, length, custom, message }: RequestFormData = await request.json();

    // Validation for required fields
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !size?.trim() || !length?.trim()) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your Gmail address
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bassam16597@gmail.com',
      subject: `New Service Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007cba; padding-bottom: 10px;">
            New Service Request
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Customer Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;">${phone}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f0f8ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Service Requirements</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px;">Size:</td>
                <td style="padding: 8px 0; text-transform: capitalize;">${size}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Length:</td>
                <td style="padding: 8px 0;">${length} cm</td>
              </tr>
              ${custom ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Custom Measurements:</td>
                <td style="padding: 8px 0;">${custom}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          ${message ? `
          <div style="background: #fff8dc; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Additional Message</h3>
            <div style="background: white; padding: 15px; border-radius: 3px; border-left: 4px solid #ffa500;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">
              This request was sent from your website service form.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Request submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending request email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit request' },
      { status: 500 }
    );
  }
}
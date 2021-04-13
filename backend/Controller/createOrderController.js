import express from 'express'
import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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',
    },
  })
)

export const insertOrderToDB = asyncHandler(async (req, res) => {
  const {
    paxName,
    paxEmail,
    paxContact,
    flightNo,
    instructions,
    totalPax,
    checkInLuggage,
    carryOn,
    noofItems,
    totalFare,
    processingFee,
    payableAmount,
    vehicleDetails,
    paymentMethod,
    paymentResult,
    isPaid,
    isPaidAt,
  } = req.body

  if (vehicleDetails && vehicleDetails.length === 0) {
    res.status(400)
    throw new Error('No Order Items')
    return
  } else {
    const order = new Order({
      paxName,
      paxEmail,
      paxContact,
      flightNo,
      instructions,
      totalPax,
      checkInLuggage,
      carryOn,
      noofItems,
      totalFare,
      processingFee,
      payableAmount,
      vehicleDetails,
      paymentMethod,
      paymentResult,
      isPaid,
      isPaidAt,
    })

    const createOrder = await order.save()
    res.status(201).json(createOrder)
    console.log(createOrder)
    return await transporter.sendMail({
      from: 'jalajgarima@hotmail.com', // sender address
      to: paxEmail,
      // bcc: 'jalajgarima@gmail.com',
      subject: 'Booking Confirmation', // Subject line
      text: 'Hello world?', // plain text body
      html: `<h3>Dear ${paxName}</h3>
      <p>This Is A Confirmation Email</p>
      <p>Booking Details:</p>
      <p>Order Id: ${createOrder._id}</p>
      `, // html body
    })

    console.log('Message sent')

    //  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  }
})

import mongoose from 'mongoose'
const { Schema } = mongoose

const orderSchema = new Schema(
  {
    paxName: {
      type: String,
      required: true,
    },
    paxEmail: {
      type: String,
      required: true,
    },
    paxContact: {
      type: String,
      required: true,
    },
    flightNo: {
      type: String,
    },
    instructions: {
      type: String,
    },
    totalPax: {
      type: Number,
      required: true,
    },
    checkInLuggage: {
      type: Number,
    },
    carryOn: {
      type: Number,
    },
    noofItems: {
      type: Number,
    },
    totalFare: {
      type: Number,
      required: true,
    },
    processingFee: {
      type: Number,
      required: true,
    },
    payableAmount: {
      type: Number,
      required: true,
    },
    vehicleDetails: [
      {
        name: { type: String, required: true },
        pax: { type: String, required: true },
        suitcases: { type: String, required: true },
        addressPickup: { type: String, required: true },
        addressDrop: { type: String, required: true },
        ti: { type: String, required: true },
        vehicleFare: { type: Number, required: true },
      },
    ],
    paymentMethod: {
      type: String,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    isPaid: {
      type: Boolean,

      default: false,
    },
    isPaidAt: {
      type: Date,
    },
    isCompleted: {
      type: Boolean,

      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Orders = mongoose.model('Orders', orderSchema)

export default Orders

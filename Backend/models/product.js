import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discount: {
    type: Number,
    default: 0,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Shoes', 'T-Shirt', 'Shirt', 'Blazer', 'Shopping']  // Restricting to specific types
  },
  brand: {
    type: String,
    trim: true
  },
  size: {
    type: [String],  // Array of sizes, e.g., ['S', 'M', 'L', 'XL']
    default: []
  },
  color: {
    type: [String],  // Array of colors available
    default: []
  },
  material: {
    type: String,
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  images: [
    {
      type: String,
      required: true
    }
  ],
  description: {
    type: String,
    trim: true
  },
  reviews: [reviewSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    required: true
  }
});

// Middleware to update `updatedAt` before saving
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;

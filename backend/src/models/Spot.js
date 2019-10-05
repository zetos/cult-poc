const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpotSchema = new Schema(
  {
    thumbnail: String,
    cult: {
      type: String,
      required: true,
      minlength: 3
    },
    price: Number,
    deities: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true,
    toJSON: {virtuals: true }
  }
);

SpotSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3001/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);

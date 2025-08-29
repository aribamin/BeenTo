const Place = require('../models/places');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
    const place = await Place.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    place.reviews.push(review);
    await review.save();
    await place.save();
    req.flash('success', 'Created new Review!');
    res.redirect(`/places/${place._id}`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Place.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    req.flash('success', 'Successfully deleted review!');
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/places/${id}`)
}
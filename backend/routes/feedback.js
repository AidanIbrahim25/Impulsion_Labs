const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST /api/feedback - Save new feedback
router.post("/", async (req, res) => {
    try {
        const { message, category, location } = req.body;
        
        if (!message || !category || !location) {
            return res.status(400).json({ 
                success: false, 
                error: "Message, category, and location are required" 
            });
        }

        const feedback = new Feedback({
            message,
            category,
            location
        });

        await feedback.save();
        res.status(201).json({ 
            success: true, 
            data: feedback 
        });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            error: err.message 
        });
    }
});

// GET /api/feedback - Return all feedback
router.get("/", async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.json({ 
            success: true, 
            data: feedbacks 
        });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            error: err.message 
        });
    }
});

// PATCH /api/feedback/:id - Update status
router.patch("/:id", async (req, res) => {
    try {
        const { status } = req.body;
        
        if (!status) {
            return res.status(400).json({ 
                success: false, 
                error: "Status is required" 
            });
        }

        const feedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!feedback) {
            return res.status(404).json({ 
                success: false, 
                error: "Feedback not found" 
            });
        }

        res.json({ 
            success: true, 
            data: feedback 
        });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            error: err.message 
        });
    }
});

module.exports = router;

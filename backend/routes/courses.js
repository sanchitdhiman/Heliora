const express = require('express');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');
const router = express.Router();

// Create a new course (teacher only)
router.post('/create', authMiddleware, roleMiddleware(['teacher']), async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const db = req.app.locals.db;
        const courses = db.collection('courses');

        const course = {
            title,
            description,
            createdBy: req.user.email,
            createdAt: new Date(),
        };
        await courses.insertOne(course);

        res.status(201).json({ message: 'Course created successfully', course });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
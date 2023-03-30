import { getMembers, getMember, deleteMember } from '../controllers/members.js';
import express from 'express';

const router = express.Router();

router.get('/', getMembers);
router.get('/:id', getMember);
router.delete('/:id', deleteMember);
// router.patch('/:id', updateMember);


export default router;
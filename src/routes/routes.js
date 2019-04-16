
import { Router } from 'express';
import PhoneNumberGenerator from '../controller/PhoneNumberGenerator';

const router = Router();

const {
  generatePhoneNumber, validateFilesForDuplicates, getMinAndMax,
  sortGeneratedContacts,
} = PhoneNumberGenerator;

router.get(
  '/numbers',
  generatePhoneNumber,
);

router.get(
  '/validate-numbers',
  validateFilesForDuplicates,
);

router.get(
  '/min-max',
  getMinAndMax,
);

router.get(
  '/order-contacts?',
  sortGeneratedContacts,
);

export default router;

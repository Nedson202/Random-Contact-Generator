import fs from 'fs';
import { readFile, sortPhoneNumbers, getPhoneNumber } from '../helper';
import {
  generatedNumbersPath, lengthOfNumbers, minimumSize,
  maximumSize
} from '../utils';

class PhoneNumberGenerator {
  static async generatePhoneNumber(_, res, next) {
    try {
      const phoneNumbers = [];
      while (phoneNumbers.length < lengthOfNumbers) {
        const generatedNumber = getPhoneNumber(minimumSize, maximumSize);
        if (!phoneNumbers.includes(generatedNumber)) {
          phoneNumbers.push(generatedNumber);
        }
      }

      await fs.writeFileSync(generatedNumbersPath, JSON.stringify(phoneNumbers));
      const readStream = fs.createReadStream(generatedNumbersPath);
      readStream.pipe(res);
      res.setHeader('Content-disposition', 'attachment; filename=All-contacts');
      return;
    } catch (error) { /* istanbul ignore next */
      next(error);
    }
  }

  static async validateFilesForDuplicates(_, res, next) {
    try {
      const parsedFile = await readFile();

      if (!parsedFile) {
        return res.status(404).json({
          error: true,
          message: 'No contact generated yet',
        });
      }
      const removeDuplicates = [...new Set(parsedFile)];

      if (removeDuplicates.length === parsedFile.length) {
        return res.status(200).json({
          error: false,
          message: `File starting with ${parsedFile[0]} contains no duplicate`,
        });
      }
    } catch (error) { /* istanbul ignore next */
      next(error);
    }
  }

  static async getMinAndMax(_, res, next) {
    try {
      const allContacts = await readFile();
      const maximumValue = Math.max(...allContacts);
      const minimumValue = Math.min(...allContacts);

      if (!maximumValue && !minimumValue) {
        return res.status(404).json({
          error: true,
          message: 'No contact generated yet',
        });
      }

      return res.status(200).json({
        error: false,
        message: 'Maximum and minimum generated number retrieved successfully',
        data: {
          minimumValue: `0${minimumValue}`,
          maximumValue: `0${maximumValue}`,
        }
      });
    } catch (error) { /* istanbul ignore next */
      next(error);
    }
  }

  static async sortGeneratedContacts(req, res, next) {
    try {
      const { order } = req.query;
      const allContacts = await readFile();
      const filePath = `src/generatedFiles/${order}.txt`;

      const data = sortPhoneNumbers(allContacts, order);
      await fs.writeFileSync(filePath, JSON.stringify(data));

      const readStream = fs.createReadStream(filePath);
      readStream.pipe(res);
      res.setHeader('Content-disposition', `attachment; filename=Contacts-in-${order}-order`);
      return;
    } catch (error) { /* istanbul ignore next */
      next(error);
    }
  }
}

export default PhoneNumberGenerator;

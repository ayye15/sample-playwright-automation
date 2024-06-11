import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

// generate a valid real name
export function generateValidRealName(): string {
  let realName: string;

  do {
    realName = faker.person.fullName();

    // not exceed 20 characters
    if (realName.length > 20) {
      realName = realName.slice(0, 20);
    }
  } while (realName.length < 6 || !/^[0-9a-zA-Z ]*$/.test(realName));

  return realName;
}

// generate a valid last name
export function generateValidLastName(): string {
  let lastName: string;

  do {
    lastName = faker.person.lastName();
  } while (lastName.length < 6 || !/^[0-9a-zA-Z ]*$/.test(lastName));

  return lastName;
}

// generate a valid displayname
export function generateName(): string {
  let displayName: string;

  do {
    displayName = faker.internet.displayName();
  } while (displayName.length < 6 || !/^[0-9a-zA-Z ]*$/.test(displayName));

  return displayName;
}

// generate a valid username
export function generateValidUsername(): string {
  let username: string;

  // Generate a unique alphanumeric username
  do {
    username = faker.internet.userName();
  } while (
    username.length < 8 ||
    !/^[a-zA-Z0-9]+$/.test(username) ||
    username.length > 20
  );

  // username is lowercase and within 20 characters
  const limitedUsername = username.toLowerCase().slice(0, 20);

  return limitedUsername;
}

// generate a valid birthday
export function generateValidBirthday() {
  const randomDays = faker.number.int(365);

  const birthday = DateTime.now()
    .minus({ years: 22, days: randomDays }) // Subtract random years and days
    .toJSDate(); // Convert DateTime to Date

  // Format the birthday as mm/dd/yyyy with leading zeros
  const month = (birthday.getMonth() + 1).toString().padStart(2, '0');
  const day = birthday.getDate().toString().padStart(2, '0');
  const year = birthday.getFullYear();
  const formattedBirthday = `${month}/${day}/${year}`;

  return formattedBirthday;
}
export function generateValidBirthdayNewFormat() {
  const randomDays = faker.number.int(365);

  const birthday = DateTime.now()
    .minus({ years: 22, days: randomDays }) // Subtract random years and days
    .toJSDate(); // Convert DateTime to Date

  // Format the birthday as mm/dd/yyyy with leading zeros
  const month = (birthday.getMonth() + 1).toString().padStart(2, '0');
  const day = birthday.getDate().toString().padStart(2, '0');
  const year = birthday.getFullYear();
  const formattedBirthday = `${year}-${month}-${day}`;

  return formattedBirthday;
}

export function randomBirthday() {


  const generateRandomBirtdayData = () => {
    const randomMonth = faker.date.month();
    const randomDay = faker.datatype.number({ min: 1, max: 31 });
    const randomYear = faker.datatype.number({ min: 1950, max: 2003 });
    const randomNumber = faker.datatype.number({ min: 1, max: 30 });

    return {
      month: randomMonth,
      day: randomDay,
      year: randomYear,
      number: randomNumber,
    };
  };
}

// generate a valid email address
export function generateValidEmailAddress(): string {
  const generatedEmails: string[] = [];

  const domains: string[] = [
    'gmail.com',
    'googlemail.com',
    'example.com',
    'yourdomain.com',
    'testdomain.com',
    'testingdomain.com',
    'exampledomain.com',
    'ahooh.com',
    'testmail.com',
  ];

  const validChars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const emailLength = Math.floor(Math.random() * 8) + 8; // Random length between 8 and 15
  let email = '';

  for (let i = 0; i < emailLength; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    email += validChars[randomIndex];
  }

  const selectedDomain = domains[Math.floor(Math.random() * domains.length)];
  email += `@${selectedDomain}`;

  // Check for duplicates and generate a new email if needed
  while (generatedEmails.includes(email)) {
    email = generateValidEmailAddress();
  }

  generatedEmails.push(email);

  return email;
}

// generate valid mobile number
export function generateMobileNumber() {
  return '9' + faker.number.int({ min: 100000000, max: 999999999 });
}

export function generateValidBirthdayAbove21() {
  // Generate a random birth year between 1980 and 2002
  const adjustedBirthYear = faker.number.int({ min: 1980, max: 2002 });

  // Ensure the random birth year has exactly four digits
  const formattedBirthYear = String(adjustedBirthYear).padStart(3, '0');

  // Generate random month and days
  const randomBirthMonth = faker.number.int({ min: 1, max: 12 });
  const randomBirthDay = faker.number.int({ min: 1, max: 28 });

  // Format the birthday as a string in the 'MM/DD/YYYY' format
  const formattedBirthDate = `${String(randomBirthMonth).padStart(
    2,
    '0'
  )}/${String(randomBirthDay).padStart(2, '0')}/${formattedBirthYear}`;

  return formattedBirthDate;
}
export function generateValidBirthYear() {
  const birthday = DateTime.now()
    .minus({ years: 22 }) // Subtract random years and days
    .toJSDate(); // Convert DateTime to Date

  // Format the birthday as mm/dd/yyyy with leading zeros
  const year = birthday.getFullYear();
  const formattedBirthday = `${year}`;

  return formattedBirthday;
}

export function generateRandomDay() {
  // Generate a random number between 1 and 28
  const randomDay = faker.number.int({ min: 1, max: 28 });

  return randomDay;
}

export function generateRandomMonth() {
  // Generate a random number between 1 and 12
  const randomMonth = faker.number.int({ min: 1, max: 12 });

  return randomMonth;
}

export function selectStartDate() {
  const startDate = faker.date.past({ refDate: '2023-12-01' });

  return startDate;
}
export function selectEndDate() {
  const startDate = faker.date.past({ refDate: '2023-12-31' });

  return startDate;
}

// generate valid CVC
export function generateRandomCvc() {
  const cvcNumber = faker.number.int({ min: 100, max: 999 });

  return cvcNumber;
}
export function generateRandomNum() {
  const ranNumber = faker.number.int({ min: 2, max: 20 });

  return ranNumber;
}
// generate a valid username
export function generateInvalidPassword(): string {
  let invalidPassword: string;

  // Generate a unique alphanumeric invalidPassword
  do {
    invalidPassword = faker.internet.password();
  } while (
    invalidPassword.length < 8 ||
    !/^[a-zA-Z0-9]+$/.test(invalidPassword) ||
    invalidPassword.length > 20
  );
  return invalidPassword;
}
export function generateRandomNumForDeposit() {
  const ranNumber = faker.number.int({ min: 10, max: 30 });

  return ranNumber;
}

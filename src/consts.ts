class MissedEnvVarError extends Error {
  constructor(variableName: string) {
    super(`Missed environment variable: ${variableName}`);
    this.name = 'MissedEnvVarError';
  }
}
const throwMissedEnvVarError = (variableName: string): never => {
  throw new MissedEnvVarError(variableName);
};

export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY as string || throwMissedEnvVarError('REACT_APP_FIREBASE_API_KEY');
export const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string || throwMissedEnvVarError('FIREBASE_AUTH_DOMAIN');
export const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID as string || throwMissedEnvVarError('FIREBASE_PROJECT_ID');
export const FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET as string || throwMissedEnvVarError('FIREBASE_STORAGE_BUCKET');
export const FIREBASE_MESSAGING_SENDER_ID = process.env
  .REACT_APP_FIREBASE_MESSAGING_SENDER_ID as string || throwMissedEnvVarError('FIREBASE_MESSAGING_SENDER_ID');
export const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID as string || throwMissedEnvVarError('FIREBASE_APP_ID');

export const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const transformLeft = 66.6;
export const transformRight = 0;

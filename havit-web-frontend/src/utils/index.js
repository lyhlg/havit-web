import moment from 'moment';

export const API_PRO = '';
export const API_DEV = 'http://localhost:8080';

export const FORMAT_FILENAME = (type, fileName) => {
  console.log(type, fileName);
  const date = moment().format('YYYYMMDD');
  const randomString = Math.random()
    .toString(32)
    .substring(2, 7);
  const cleanFileName = fileName.toLowerCase();
  const newFileName = `images/${type}-${date}-${randomString}$-${cleanFileName}`;
  console.log('FORMAT_FILENAME', newFileName.substring(0, 40));
  return newFileName.substring(0, 40);
};

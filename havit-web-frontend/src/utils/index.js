import moment from 'moment';
import s3BrowserDirectUpload from 's3-browser-direct-upload';
import { AWS_KEYS } from 'utils/awskey';

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

export const AWS_IMAGE_UPLOAD = (type, file, callback) => {
  const s3clientOptions = {
    accessKeyId: `${AWS_KEYS.accessKeyId}`,
    secretAccessKey: `${AWS_KEYS.secretAccessKey}`,
    region: 'eu-central-1',
    signatureVersion: 'v4',
  };
  const s3client = new s3BrowserDirectUpload(s3clientOptions);

  var uploadOptions = {
    data: file,
    key: FORMAT_FILENAME(type, file),
    bucket: 'codestates-havit-web',
  };

  s3client.upload(uploadOptions, (err, imgURL) => {
    return callback(imgURL);
  });
};

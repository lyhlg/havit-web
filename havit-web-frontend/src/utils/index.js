import moment from 'moment';
import s3BrowserDirectUpload from 's3-browser-direct-upload';
import { AWS_KEYS } from 'utils/awskey';

export const API_PRO = '';
// export const API_DEV = 'http://localhost:9000';
export const API_DEV = 'http://13.125.232.139:9000';

export const FORMAT_FILENAME = (type, fileName) => {
  console.log('FORMAT FILENAME : ', type, fileName);
  const date = moment().format('YYYYMMDD');
  const randomString = Math.random()
    .toString(32)
    .substring(2, 7);
  const cleanFileName = fileName.toLowerCase();
  const newFileName = `images/${type}-${date}-${randomString}$-${cleanFileName}`;
  return newFileName.substring(0, 40);
};

export const AWS_IMAGE_UPLOAD = async (type, elements, callback) => {
  console.log('IMAGE UPLOAD FUNCTION ');

  const s3clientOptions = {
    accessKeyId: `${AWS_KEYS.accessKeyId}`,
    secretAccessKey: `${AWS_KEYS.secretAccessKey}`,
    region: 'eu-central-1',
    signatureVersion: 'v4',
  };
  const s3client = new s3BrowserDirectUpload(s3clientOptions);

  let file = Array.prototype.map.call(elements, el => el.files[0]);

  console.log('file: ', file);
  let res = [],
    count = 0;
  file.forEach((item, idx) => {
    if (!item) {
      console.log('아이템이 없습니다.');
      ++count;
      res[idx] = '';
      if (count === file.length) {
        return callback(res);
      }
      return;
    }
    let uploadOptions = {
      data: item,
      key: FORMAT_FILENAME(type, item.name),
      bucket: 'codestates-havit-web',
    };
    return s3client.upload(uploadOptions, (err, imgURL) => {
      if (err) console.log('error', err);
      res[idx] = imgURL;
      console.log(count, imgURL);
      ++count;
      if (count === file.length) {
        return callback(res);
      }
    });
  });
};

import moment from 'moment';
import s3BrowserDirectUpload from 's3-browser-direct-upload';
import { AWS_KEYS } from 'utils/awskey';

export const API_PRO = '';
export const API_DEV = 'http://localhost:8080';

export const FORMAT_FILENAME = (type, fileName) => {
  console.log('FORMAT FILENAME : ', type, fileName);
  const date = moment().format('YYYYMMDD');
  const randomString = Math.random()
    .toString(32)
    .substring(2, 7);
  const cleanFileName = fileName.toLowerCase();
  const newFileName = `images/${type}-${date}-${randomString}$-${cleanFileName}`;
  console.log('FORMAT_FILENAME', newFileName.substring(0, 40));
  return newFileName.substring(0, 40);
};

export const AWS_IMAGE_UPLOAD = async (type, elements, callback) => {
  var resultUrl = [];
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
  file.forEach(item => {
    let uploadOptions = {
      data: item,
      key: FORMAT_FILENAME(type, item.name),
      bucket: 'codestates-havit-web',
    };
    return s3client.upload(uploadOptions, (err, imgURL) => {
      if (err) console.log('error', err);
      res.push(imgURL);
      console.log('uirlrlrlrl', imgURL);
      ++count;
      if (count === file.length) {
        return callback(res);
      }
    });
  });
  // Promise.all(res).then(async res => {
  //       console.log( "Promise all " , res) ;
  //     })

  // return await res;
  // return;

  // file1 = elements[0].files[0];
  // file2 = elements[1].files[0];
};

/*
else {
    file1 = elements[0].files[0];
    file2 = null;
    const s3clientOptions = {
      accessKeyId: `${AWS_KEYS.accessKeyId}`,
      secretAccessKey: `${AWS_KEYS.secretAccessKey}`,
      region: "eu-central-1",
      signatureVersion: "v4"
    };
    const s3client = new s3BrowserDirectUpload(s3clientOptions);

    var uploadOptions = {
      data: file1,
      key: FORMAT_FILENAME(type, file1.name),
      bucket: "codestates-havit-web"
    };

    s3client.upload(uploadOptions, (err, imgURL) => {
      console.log(imgURL);
      return callback(imgURL);
    });
  }*/

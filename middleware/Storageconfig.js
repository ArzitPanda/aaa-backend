const connStr = "https://azurearz.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-02-22T15:22:01Z&st=2023-01-19T07:22:01Z&spr=https&sig=NoSuEaRQll5NbgKFFPxuXVXPKMAZxX0%2FC%2BbSjGRy6AQ%3D";
const {BlobServiceClient} = require('@azure/storage-blob')

const blobServiceClient =new BlobServiceClient(connStr);


const getBlobName = originalName => {
    
    const identifier = Math.random().toString().replace(/0\./, '');
    return `${identifier}-${originalName}`;
  };

  const getStream = require('into-stream')
async function azureUpload(req,res,container) {
    const containerClient = blobServiceClient.getContainerClient(container);
  
   

  
    const stream = getStream(req.files.image.data)
    const streamLength =req.files.image.length
    const blobName = getBlobName(req.files.image.name);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.uploadStream(stream,streamLength);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId,blockBlobClient.url);
    const data ={url:blockBlobClient.url,name:blobName}
    return JSON .stringify(data);
  }



module.exports ={ connStr,azureUpload,blobServiceClient}
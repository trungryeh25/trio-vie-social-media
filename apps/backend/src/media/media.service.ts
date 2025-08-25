import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class MediaService {
  private readonly s3Client: S3Client;
  private readonly bucketName = 'trio-vie-media'; // Ensure this bucket exists in MinIO or S3

  constructor() {
    this.s3Client = new S3Client({
      region: 'us-east-1',
      endpoint: 'http://minio:9000', // MinIO service URL in Docker Compose
      credentials: {
        accessKeyId: 'minioadmin', // Use your MinIO access key
        secretAccessKey: 'minioadminpw', // Use your MinIO secret key
      },
      forcePathStyle: true, // Required for MinIO
    });
  }

  async uploadFile(file: Express.Multer.File){
    const fileKey = `${uuidv4()}-${file.originalname}`;

    await this.s3Client.send(new PutObjectCommand({
        Bucket: this.bucketName,
        Key: fileKey,
        Body: file.buffer,
        ContentType: file.mimetype,
    }));

    return `http://localhost:9000/${this.bucketName}/${fileKey}`; // Adjust URL as needed
  }
}
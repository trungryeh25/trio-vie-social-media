import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';
import { multerConfig } from '../config/multer.config';
// import path from 'path';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      path: `uploads/${file.filename}`,
    };

    // Uncomment the lines below to enable S3/MinIO upload functionality
    // const fileUrl = await this.mediaService.uploadFile(file);
    // return { url: fileUrl };
  }
}

import { All, Controller, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('/auth/*')
  public async requestSecurity(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body);
  }

  @All('/users/*')
  public async requestUsers(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body);
  }

  @All('/performers/*')
  public async requestPerformers(@Req() request: Request) {
    
    return this.appService.requestMicroservice(request.url, request.method, request.body);
  }

  @All('/albums/*')
  public async requestAlbums(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body);
  }

  @All('/songs/*')
  @UseInterceptors(FileInterceptor('file'))
  public async requestSongs(@Req() request: Request, @UploadedFile() file: Express.Multer.File) {
    console.log(request.body);
    //return this.appService.requestMicroservice(request.url, request.method, request.body);
    return this.appService.requestSongs(request.url, request.method, request.body, file);
  }

  @All('/fav-songs/*')
  public async requestFavSongs(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body);
  }

  @All('/fav-albums/*')
  public async requestFavAlbums(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body);
  }

  @All('/fav-performers/*')
  public async requestFavPerformers(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body);
  }

}

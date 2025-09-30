import { All, Controller, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('/auth/*')
  public async requestSecurity(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body, request);
  }

  @All('/users/*')
  public async requestUsers(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body, request);
  }

  @All('/performers/*')
  public async requestPerformers(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body, request);
  }

  @All('/albums/*')
  public async requestAlbums(@Req() request: Request) {
    return this.appService.requestMicroservice(request.url, request.method, request.body, request);
  }
}
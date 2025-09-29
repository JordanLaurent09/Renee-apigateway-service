import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  private performers = 'http://performers-service:3000';
  private albums = 'http://performers-service:3000';
  private songs = 'http://performers-service:3000';
  private favorites = 'http://favorites-service:3000';
  private users = 'http://users-service:5077';

  private security = 'http://security-service:5261';

  constructor(private readonly httpService: HttpService) {}
   

  public async requestMicroservice(url: string, method: string, body: any, request: any): Promise<any> {
    try {
      url = this.UrlBuilder(url);
      console.log(url);
      console.log(body);
      const token = request.headers.authorization;
      const response = await firstValueFrom(this.httpService.request({url, method: method, data: body, headers: {
        Authorization: token
      }}));
  
      return (await response).data;
    } catch (error) {
      console.log(error);
    }
  }

  public async requestSongs(url: string, method: string, body: any, file: Express.Multer.File): Promise<any> {
      
      console.log(url);
      url = this.UrlBuilder(url);
      console.log(url);
      console.log(body);
      console.log(file);
      console.log(method);
      if (method === 'POST') {
        /* const response = await axios.post('http://performers-service:3000/songs/add', {file: file, body: body});
        console.log(response); */
        const response = await firstValueFrom(this.httpService.request({url, method: method, data: {file, body}}));
      }
      //const response = await firstValueFrom(this.httpService.request({url, method: method, data: body}));
  }

  public UrlBuilder(url: string): string {
    if (url.startsWith('/performers')) {
      return this.performers + url;
    }
    if (url.startsWith('/albums')) {
      return this.albums + url;
    }
    if (url.startsWith('/songs')) {
      return this.songs + url;
    }
    if (url.startsWith('/fav')) {
      return this.favorites + url;
    }
    if (url.startsWith('/users')) {
      return this.users + url;
    }
    if (url.startsWith('/auth')) {
      return this.security + url;
    }
  }
}

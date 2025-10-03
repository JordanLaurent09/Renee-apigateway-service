import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { performersServiceConfiguration, securityServiceConfiguration, usersServiceConfiguration } from './constants/environments.configuration';

@Injectable()
export class AppService {

  private performers = performersServiceConfiguration.url;
  private albums = performersServiceConfiguration.url;
  private songs = performersServiceConfiguration.url;
  private users = usersServiceConfiguration.url;

  private security = securityServiceConfiguration.url;

  constructor(private readonly httpService: HttpService) {}
   

  public async requestMicroservice(url: string, method: string, body: any, request: any): Promise<any> {
    try {
      url = this.UrlBuilder(url);
      const token = request.headers.authorization;
      const response = await firstValueFrom(this.httpService.request({url, method: method, data: body, headers: {
        Authorization: token
      }}));
      return (await response).data;
    } catch (error) {
      console.log(error);
      return { status: error.status, message: error.response.data }
    }
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
    if (url.startsWith('/users')) {
      return this.users + url;
    }
    if (url.startsWith('/auth')) {
      return this.security + url;
    }
  }
}
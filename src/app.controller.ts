import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SpacepostResponseDto } from './spacepostResponse.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('spaceposts')
  getSpaceposts(): Promise<SpacepostResponseDto> {
    return this.appService.getSpaceposts();
  }
}

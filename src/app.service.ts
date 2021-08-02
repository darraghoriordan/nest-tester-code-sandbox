import { Injectable } from '@nestjs/common';
import { SpacepostResponseDto } from './spacepostResponse.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getSpaceposts(): Promise<SpacepostResponseDto> {
    return new SpacepostResponseDto();
  }
}

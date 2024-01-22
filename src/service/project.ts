import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  getProjectName(): string {
    return '项目名';
  }
}

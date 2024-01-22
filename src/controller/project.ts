import { Controller, Get } from '@nestjs/common';
import { ProjectService } from '../service/project';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/project')
  getProjectList(): string {
    return this.projectService.getProjectName();
  }
}

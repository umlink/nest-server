import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProjectService } from '../service/project';
import { ApiTags } from '@nestjs/swagger';
import { CreateProjectInput, CreateProjectOutput } from '../dto/project';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/name/:id')
  getProjectName(@Query() query?: any, @Param() param?: any): string {
    console.log(query, param);
    return this.projectService.getProjectName();
  }

  @Get('exception')
  getException(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Post('/create')
  createProject(@Body() body: CreateProjectInput): CreateProjectOutput {
    return body;
  }
}

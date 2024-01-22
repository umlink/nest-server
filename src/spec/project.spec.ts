import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from '../controller/project';
import { ProjectService } from '../service/project';

describe('ProjectController', () => {
  let appController: ProjectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [ProjectService],
    }).compile();

    appController = app.get<ProjectController>(ProjectController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getProjectName()).toBe('Hello World!');
    });
  });
});

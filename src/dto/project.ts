import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectInput {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: number;

  @ApiProperty()
  type: 'PUBLIC' | 'PRIVATE';
}

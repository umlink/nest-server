import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectInput {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: number;
}

export class CreateProjectOutput {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: number;
}

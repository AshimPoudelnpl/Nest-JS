import { IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name!: string;

  @IsString()
  email!: string;

  @IsString()
  phone!: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  address!: string;
}

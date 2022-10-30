import { IsString } from "class-validator";

export class BaseRequestBody {
  @IsString()
  name: string;
}

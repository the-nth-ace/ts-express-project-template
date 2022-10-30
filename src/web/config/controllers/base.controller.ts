import { Inject } from "@decorators/di";
import { BaseService } from "@business-logic/BaseService";
import { BaseRequestBody } from "@business-logic/requests/BaseRequest";
import {
  Response,
  Params,
  Controller,
  Get,
  attachControllers,
  Middleware,
  Post,
  Body,
} from "@decorators/express";

@Controller("/")
export class BaseController {
  constructor(@Inject(BaseService) private baseService: BaseService) {}

  @Get("/")
  getData(@Response() res: any, @Params("id") id: string) {
    res.send(this.baseService.get());
  }

  @Post("/")
  postData(@Response() res: any, @Body() body: BaseRequestBody) {
    res.send(body);
  }
}

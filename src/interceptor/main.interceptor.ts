import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { response } from 'express';

@Injectable()
export class MainInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const path = request.path;
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((data) => {
        if (path === '/v1') {
          // '/v1' 경로로 요청이 들어온 경우
          return {
            success: true,
            ...data,
          };
        } else if (path === '/v2') {
          return {
            ...data,
            statusCode: statusCode,
          };
        } else if (path === '/') {
          // '/' 경로로 요청이 들어온 경우
          return;
        } else {
          // 다른 경로로 요청이 들어온 경우
          return data;
        }
      }),
    );
  }
}

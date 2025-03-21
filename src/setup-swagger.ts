import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication, port: number): void {
    const options = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('Back end API.')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('documentation', app, document);

    console.info(`documentation is running in: http://localhost:${port}/documentation`);
}

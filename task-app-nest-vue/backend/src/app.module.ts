import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'SA',
      password: '123',
      database: 'nestTask',
      autoLoadEntities: true,
      extra: {
        trustServerCertificate: true
      },
    })
  ],
})
export class AppModule {}

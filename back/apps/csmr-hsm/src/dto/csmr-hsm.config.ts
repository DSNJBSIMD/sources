import { Type } from 'class-transformer';
import { IsObject, ValidateNested } from 'class-validator';

import { AppRmqConfig } from '@fc/app';
import { HsmConfig } from '@fc/hsm';
import { LoggerConfig } from '@fc/logger';
import { LoggerConfig as LoggerLegacyConfig } from '@fc/logger-legacy';
import { MicroservicesRmqConfig } from '@fc/microservices-rmq';

export class CsmrHsmConfig {
  @IsObject()
  @ValidateNested()
  @Type(() => AppRmqConfig)
  readonly App: AppRmqConfig;

  @IsObject()
  @ValidateNested()
  @Type(() => LoggerConfig)
  readonly Logger: LoggerConfig;

  @IsObject()
  @ValidateNested()
  @Type(() => LoggerLegacyConfig)
  readonly LoggerLegacy: LoggerLegacyConfig;

  @IsObject()
  @ValidateNested()
  @Type(() => HsmConfig)
  readonly Hsm: HsmConfig;

  @IsObject()
  @ValidateNested()
  @Type(() => MicroservicesRmqConfig)
  readonly CsmrHsmClientMicroService: MicroservicesRmqConfig;
}

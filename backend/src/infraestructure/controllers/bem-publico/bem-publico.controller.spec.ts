import { Test, TestingModule } from '@nestjs/testing';
import { BemPublicoController } from './bem-publico.controller';

describe('BemPublicoController', () => {
  let controller: BemPublicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BemPublicoController],
    }).compile();

    controller = module.get<BemPublicoController>(BemPublicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

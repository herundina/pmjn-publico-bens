import { Test, TestingModule } from '@nestjs/testing';
import { PastaController } from './pasta.controller';

describe('PastaController', () => {
  let controller: PastaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PastaController],
    }).compile();

    controller = module.get<PastaController>(PastaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

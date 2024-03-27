import { Test, TestingModule } from '@nestjs/testing';
import { CertidaoController } from './certidao.controller';

describe('CertidaoController', () => {
  let controller: CertidaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CertidaoController],
    }).compile();

    controller = module.get<CertidaoController>(CertidaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

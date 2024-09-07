import { CepModule } from './cep.module';

describe('CepModule', () => {
  let cepModule: CepModule;

  beforeEach(() => {
    cepModule = new CepModule();
  });

  it('should create an instance', () => {
    expect(cepModule).toBeTruthy();
  });
});

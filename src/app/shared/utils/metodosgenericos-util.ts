import SHA256 from 'crypto-js/sha256';

export class MetodosGenericosutil {

  public static encriptar(data: string):string {
        return SHA256(data);
      }
}
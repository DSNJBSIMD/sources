/**
 * Code generated from oidc-provider exceptions
 * @see @fc/oidc-provider/src/cli/scaffold-exceptions/run.sh
 */
import { OidcProviderBaseRuntimeException } from '../oidc-provider-base-runtime.exception';

export class OidcProviderRuntime_Error_DA14_Exception extends OidcProviderBaseRuntimeException {
  static CODE = 'DA14';
  static ERROR_CLASS = 'Error';
  static ERROR_DETAIL =
    'jwt.sign.key Resource Server configuration must be a secret (symmetric) key';
  static DOCUMENTATION =
    'jwt.sign.key Resource Server configuration must be a secret (symmetric) key';
  static ERROR_SOURCE = 'models/formats/jwt.js:43';
  static UI = 'OidcProvider.exceptions.Error.DA14';
}
